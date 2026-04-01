import { world, system } from "@minecraft/server";
import { ModalFormData, ActionFormData } from "@minecraft/server-ui";

const DOGZ_TYPES = new Set(["dogz:retriever", "dogz:chihuahua", "dogz:german_shepherd"]);
const DIMS = ["minecraft:overworld", "minecraft:nether", "minecraft:the_end"];

// ─── Interaction Entry Point ──────────────────────────────────────────────────
// Sneak + interact on a tamed, non-downed dog → open command menu.
// Regular tap is left free for minecraft:healable to fire normally.

world.beforeEvents.playerInteractWithEntity.subscribe((ev) => {
    const dog = ev.target;
    if (!DOGZ_TYPES.has(dog.typeId)) return;
    if (!ev.player.isSneaking) return;
    if (!dog.hasComponent("minecraft:is_tamed")) return;   // wild dog — let taming proceed
    if (dog.hasComponent("minecraft:is_shaking")) return; // downed — let revival interact fire
    ev.cancel = true;
    system.run(() => showDogMenu(ev.player, dog));
});

// ─── Main Menu ────────────────────────────────────────────────────────────────

function showDogMenu(player, dog) {
    const isSittingGlobal = dog.hasComponent("minecraft:is_sitting");
    const isSitting  = isSittingGlobal && !dog.hasComponent("minecraft:is_sheared");
    const isLaying   = isSittingGlobal &&  dog.hasComponent("minecraft:is_sheared");
    const isGuarding = dog.hasTag("dogz:is_guarding");
    const guardRadius = dog.getDynamicProperty("guardRadius") ?? 5;

    const form = new ModalFormData();
    form.title("Dog Commands");
    form.toggle("Sit",                                              isSitting);
    form.toggle("Lay Down",                                         isLaying);
    form.toggle("Guard Mode §8(hold current position)",             isGuarding);
    form.slider("Guard Radius §8(blocks the dog can wander)", 1, 20, 1, guardRadius);
    form.toggle("§l⏰ [Configure Schedule]§r §8← enable to open after submit", false);

    form.show(player).then((response) => {
        if (response.canceled) return;
        const [sitValue, layValue, guardValue, radiusValue, openSchedule] = response.formValues;

        // ── Posture transitions ───────────────────────────────────────────────
        // Priority: lay > sit > stand. Events map 1-to-1 onto the BP state machine.
        if (layValue) {
            if (!isLaying) {
                if (isSitting) dog.triggerEvent("dogz:on_stand"); // pass through stand first
                dog.triggerEvent("dogz:lay_down");
            }
        } else if (sitValue) {
            if (!isSitting) {
                if (isLaying) dog.triggerEvent("dogz:stand_up"); // pass through stand first
                dog.triggerEvent("dogz:on_sit");
            }
        } else {
            // Standing
            if (isSitting)    dog.triggerEvent("dogz:on_stand");
            else if (isLaying) dog.triggerEvent("dogz:stand_up");
        }

        // ── Guard mode ────────────────────────────────────────────────────────
        dog.setDynamicProperty("guardRadius", radiusValue);

        if (guardValue && !isGuarding) {
            dog.addTag("dogz:is_guarding");
            const pos = dog.location;
            dog.setDynamicProperty("homeX", pos.x);
            dog.setDynamicProperty("homeY", pos.y);
            dog.setDynamicProperty("homeZ", pos.z);
            player.sendMessage(`§a[Dogz] Guard mode ON — radius: ${radiusValue} blocks.`);
        } else if (!guardValue && isGuarding) {
            dog.removeTag("dogz:is_guarding");
            dog.removeTag("dogz:is_scheduled");
            dog.setDynamicProperty("scheduleTarget", undefined);
            player.sendMessage("§e[Dogz] Guard mode OFF.");
        } else if (guardValue) {
            player.sendMessage(`§a[Dogz] Guard radius: ${radiusValue} blocks.`);
        }

        // ── Sync movement AI (only relevant when standing) ────────────────────
        // Sitting/laying locks movement via their own behavior priorities, so
        // we only swap follow_ai ↔ guard_ai when the dog is (or becomes) standing.
        const willBeStanding = !sitValue && !layValue;
        if (willBeStanding) {
            if (dog.hasTag("dogz:is_guarding")) {
                dog.triggerEvent("dogz:set_guard");
            } else {
                dog.triggerEvent("dogz:set_follow");
            }
        }

        if (openSchedule) system.run(() => showScheduleMenu(player, dog));
    });
}

// ─── Schedule Helpers ─────────────────────────────────────────────────────────

function getScheduleData(dog) {
    try {
        const raw = dog.getDynamicProperty("scheduleData");
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    return [];
}

// Converts Minecraft time ticks (0-23999) to "HH:MM" (24h clock).
// MC 0 = 06:00, 6000 = 12:00, 12000 = 18:00, 18000 = 00:00
function mcTimeToHHMM(ticks) {
    const totalMinutes = Math.round((ticks / 1000) * 60 + 360) % 1440;
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Converts hour (0-23) + minuteStep (0-3, each step = 15 min) to MC ticks.
function hhmmToMcTime(hour, minuteStep) {
    return Math.round(((hour - 6 + 24) % 24) * 1000 + minuteStep * 15 * (1000 / 60));
}

// ─── Schedule Menu ────────────────────────────────────────────────────────────

function showScheduleMenu(player, dog) {
    const entries = getScheduleData(dog);

    const form = new ActionFormData();
    form.title("Dog Schedule");

    let body = `Entries: ${entries.length}/3\n\n`;
    if (entries.length === 0) {
        body += "§8No schedule set.\nAdd an entry to send your dog\nto a location at specific in-game times.\n§7(position saved = your location\nwhen you confirm the entry)";
    } else {
        entries.forEach((e, i) => {
            body += `§f${i + 1}. §e${mcTimeToHHMM(e.startTime)} §f→ §e${mcTimeToHHMM(e.endTime)}\n   §7(${Math.round(e.pos.x)}, ${Math.round(e.pos.y)}, ${Math.round(e.pos.z)})\n`;
        });
    }
    form.body(body);

    let idx = 0;
    const addIdx         = entries.length < 3 ? idx++ : -1;
    const clearIdx       = entries.length > 0 ? idx++ : -1;
    const deleteStartIdx = idx;
    idx += entries.length;
    const backIdx = idx++;

    if (entries.length < 3) form.button("§a[+] Add Entry");
    if (entries.length > 0) form.button("§4[X] Clear All");
    for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        form.button(`§cDelete Entry ${i + 1}\n§8${mcTimeToHHMM(e.startTime)} → ${mcTimeToHHMM(e.endTime)}`);
    }
    form.button("§e← Back");

    form.show(player).then((response) => {
        if (response.canceled) return;
        const sel = response.selection;

        if (sel === addIdx) {
            const addForm = new ModalFormData();
            addForm.title("New Schedule Entry");
            addForm.slider("Start hour §8(dog leaves — 0-23)",         0, 23, 1, 19);
            addForm.slider("Start minutes §8(0=:00  1=:15  2=:30  3=:45)", 0, 3, 1, 0);
            addForm.slider("End hour §8(dog returns — 0-23)",           0, 23, 1,  5);
            addForm.slider("End minutes §8(0=:00  1=:15  2=:30  3=:45)", 0, 3, 1, 0);
            addForm.show(player).then((aRes) => {
                if (aRes.canceled) { system.run(() => showScheduleMenu(player, dog)); return; }
                const [startHour, startMinStep, endHour, endMinStep] = aRes.formValues;
                const startTime = hhmmToMcTime(startHour, startMinStep);
                const endTime   = hhmmToMcTime(endHour,   endMinStep);
                const pos = player.location;
                entries.push({ startTime, endTime, pos: { x: pos.x, y: pos.y, z: pos.z } });
                dog.setDynamicProperty("scheduleData", JSON.stringify(entries));
                player.sendMessage(`§a[Dogz] Schedule added: ${mcTimeToHHMM(startTime)} → ${mcTimeToHHMM(endTime)} at (${Math.round(pos.x)}, ${Math.round(pos.y)}, ${Math.round(pos.z)})`);
                system.run(() => showScheduleMenu(player, dog));
            });
        } else if (sel === clearIdx) {
            dog.setDynamicProperty("scheduleData", "[]");
            system.run(() => showScheduleMenu(player, dog));
        } else if (sel >= deleteStartIdx && sel < deleteStartIdx + entries.length) {
            entries.splice(sel - deleteStartIdx, 1);
            dog.setDynamicProperty("scheduleData", JSON.stringify(entries));
            system.run(() => showScheduleMenu(player, dog));
        } else if (sel === backIdx) {
            system.run(() => showDogMenu(player, dog));
        }
    });
}

// ─── Guard Return-to-Home Loop (every 3 ticks) ───────────────────────────────
// Applies impulse to pull guarding dogs back when they wander outside their radius.
// Skips dogs that are sitting, laying, or downed (is_baby / is_shaking components).
// During an active schedule window, the target is the schedule point instead of home.

system.runInterval(() => {
    for (const dimId of DIMS) {
        try {
            const dogs = world.getDimension(dimId).getEntities({ families: ["dog"] });
            for (const dog of dogs) {
                if (!dog.hasTag("dogz:is_guarding")) continue;
                // Sitting (is_baby), laying (is_baby+is_sheared), or downed (is_shaking) — skip
                if (dog.hasComponent("minecraft:is_baby") || dog.hasComponent("minecraft:is_shaking")) continue;

                const pos = dog.location;
                let targetX, targetZ;

                if (dog.hasTag("dogz:is_scheduled")) {
                    const rawTarget = dog.getDynamicProperty("scheduleTarget");
                    if (!rawTarget) continue; // arrived, waiting for schedule window to end
                    let schedPos;
                    try { schedPos = JSON.parse(rawTarget); } catch(e) { continue; }
                    targetX = schedPos.x;
                    targetZ = schedPos.z;
                } else {
                    const hX = dog.getDynamicProperty("homeX");
                    const hZ = dog.getDynamicProperty("homeZ");
                    if (hX === undefined) continue;
                    const radius = dog.getDynamicProperty("guardRadius") ?? 5;
                    const dist = Math.sqrt(Math.pow(hX - pos.x, 2) + Math.pow(hZ - pos.z, 2));
                    if (dist <= radius) continue; // within guard zone — let random_stroll handle it
                    targetX = hX;
                    targetZ = hZ;
                }

                const dx   = targetX - pos.x;
                const dz   = targetZ - pos.z;
                const dist = Math.sqrt(dx * dx + dz * dz);

                if (dist <= 1.5) {
                    if (dog.hasTag("dogz:is_scheduled")) {
                        dog.setDynamicProperty("scheduleTarget", undefined);
                    }
                    continue;
                }

                // Face direction of travel
                dog.setRotation({ x: 0, y: -Math.atan2(dx, dz) * (180 / Math.PI) });
                const vel = dog.getVelocity();
                dog.applyImpulse({
                    x: (dx / dist) * 0.25 - vel.x,
                    y: 0,
                    z: (dz / dist) * 0.25 - vel.z
                });
            }
        } catch(e) {}
    }
}, 3);

// ─── Schedule Monitor (every 5 s = 100 ticks) ────────────────────────────────
// Checks the in-game time against each guarding dog's schedule.
// Activates/deactivates dogz:is_scheduled and sets scheduleTarget accordingly.

system.runInterval(() => {
    const timeOfDay = world.getAbsoluteTime() % 24000;
    for (const dimId of DIMS) {
        try {
            const dogs = world.getDimension(dimId).getEntities({ families: ["dog"] });
            for (const dog of dogs) {
                if (!dog.hasTag("dogz:is_guarding")) continue;
                if (dog.hasComponent("minecraft:is_shaking")) continue; // downed

                const schedule = getScheduleData(dog);
                if (schedule.length === 0) continue;

                // Supports overnight windows (e.g. 22:00 → 06:00)
                const active = schedule.find(s => {
                    if (s.startTime <= s.endTime) {
                        return timeOfDay >= s.startTime && timeOfDay < s.endTime;
                    }
                    return timeOfDay >= s.startTime || timeOfDay < s.endTime;
                });

                if (active && !dog.hasTag("dogz:is_scheduled")) {
                    dog.addTag("dogz:is_scheduled");
                    dog.setDynamicProperty("scheduleTarget", JSON.stringify(active.pos));
                } else if (!active && dog.hasTag("dogz:is_scheduled")) {
                    // Window ended — return to guard home (movement loop will handle it)
                    dog.removeTag("dogz:is_scheduled");
                    dog.setDynamicProperty("scheduleTarget", undefined);
                }
            }
        } catch(e) {}
    }
}, 100);
