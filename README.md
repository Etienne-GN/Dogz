# Dogz
High-fidelity dogs with advanced AI and survival mechanics.

## 🗺 Roadmap

### 🟢 Verified
* **New Breed: German Shepherd (v2.2.7)**: A powerful new companion with 50 HP, passive regeneration, and superior 24-block awareness.
* **Tail HP Indicator (v2.2.6)**: The height of your dog's tail tells you its health! (High = Healthy, Low = Hurt).
* **AI Behavior Fixes (v2.2.6)**: Dogs no longer attack players.
* **Nametag Visibility (v2.2.6)**: Nametags are no longer visible from excessive distances.
* **Creeper Repellent (v2.1.0)**: Creepers now naturally flee dogs (identified as cats/ocelots) while maintaining perfect vanilla targeting/swelling/exploding behavior.
* **Restricted State Transitions (v1.4.23)**: Fixed "Sit-Lay-Sit" bug. Dogs must stand up to switch between Sit and Lay states.
* **Movement Lock (v1.4.10)**: Movement set to 0.0 while sitting/laying to prevent sliding.
* **Attack Cancellation (v1.4.10)**: Dogs now forget attack targets when commanded to sit.
* **Stable Animations**: Sit, Stand, and Lay Down poses (Base visual engine).
* **Cross-Action Logic**: Smooth transitions between all states (Sit/Lay/Stand).
* **Navigation**: Dogs successfully jump 1-block obstacles and climb.
* **Leash Loyalty**: Dogs follow very closely (2 block distance) when on a lead.
* **Leash Visual**: The lead now attaches correctly to the dog's neck.
* **Triple-Bark Alert**: Rapid 0.25s alert sequence with 3s cooldown is functional.
* **Nametags**: Permanent naming system is functional.
* **No Natural Spawning**: Dogs are strictly Spawn Egg only.

### 🔵 To Test
* **Fixed Dog Revival Logic (v2.2.5)**: Replaced unreliable `minecraft:healable` with a robust `minecraft:interact` system. Revival now consistently triggers when using meat.
* **State-Cycling Immortality (v2.2.4)**: Implemented component group cycling to "re-arm" the damage sensor upon revival.
* **Fatal Damage Intercept (v2.2.4)**: Switched to `has_damage: fatal` sensor for 100% reliable death prevention.
* **Reliable Revival (v2.2.4)**: Set HP to 1 in Downed state to ensure `on_heal` always triggers.
* **Fixed Immortal Threshold (v2.2.3)**: Lowered downed threshold to 10 HP to prevent "one-hit downs" at spawn.
* **Cleaned AI (v1.4.28)**: Removed broken downed/immortal logic to restore stability. Fixed untamed dogs standing still by adding wild stroll behavior.

### ⚪ To-Do
1. **Untamed Fall Damage**: Fix bug where wild dogs take no fall damage.
3. **Proper Death Messages**: Fix "Unknown died" messages by ensuring default naming logic.
4. **Defense Mode when Attached**: Dogs guard a small radius when tied to a fence.
5. **Dyeable Collars**: Visible physical collar bones with support for 16 colors.
6. **Breeding & Puppies**: Enabling two adults to produce a baby.
7. **Puppy Growth**: AI and scale logic for babies growing into adults.
8. **Mixed Breeding**: Logic for cross-breeding different dog types.
9. **Begging Animation**: Head tilt when holding food (Requires safe Molang).
10. **Smooth Update Protocol**: Transition to version-only updates (locking UUIDs) to allow mod updates without reinstallation.

## 🐕 Dog Behavior Guide
This guide explains how to interact with your new dogs and details their advanced AI behaviors.

### Breeds
1. **Golden Retriever**: Loyal, high health (20 HP), balanced speed.
2. **Chihuahua**: Small, agile, faster movement, lower health (12 HP).
3. **German Shepherd**: The ultimate guard dog. High health (50 HP), passive regeneration, and superior awareness (24-block range).

### 🍖 Taming & Healing
- **Wild State**: Use a **Bone** to tame. Holding any **Meat** will cause wild dogs to follow you (Temptation).
- **Healing**: Feed meat to your tamed dog to restore health.
  - **Raw Meat**: +2 HP
  - **Cooked Meat**: +4 HP (Efficiency bonus!)
  - **Rotten Flesh**: +2 HP (Safe for dogs).

### 🎮 Commands
- **Sit/Stand**: Right-click (Interact) while standing to toggle.
- **Lay Down**: **Crouch (Sneak) + Interact** to make the dog lay on the ground. Crouch + Interact again to stand up.
- **Leash**: Use a Lead to make the dog follow you very closely (2 block radius).

### 🛡️ Protection & Combat
- **Bodyguard**: Your dog attacks any mob that hits you or that you attack.
- **Creeper Safety**: Dogs **ignore Creepers** to prevent explosions.
- **Creeper Repellent**: Creepers are **terrified** of your dogs and will run away!
- **Hostile Alert**: If a monster is within 16 blocks, your dog will bark **3 times rapidly** every 5 seconds to warn you.

### 💖 Survival (Immortal Companion)
- **Downed State**: Dogs **cannot die** from mob damage. When health reaches 1 HP, they enter a "Downed" state.
- **Symptoms**: They will lay down and **whine/moan** continuously.
- **Revival**: You MUST feed them meat to heal them and get them back on their feet.

### 🍼 Breeding & Growth
- **Puppies**: Feed two tamed adults of the same breed any meat to produce a puppy.
- **Growth**: Puppies grow into adults in 20 minutes. Feeding them meat speeds up the process.
- **Visuals**: Puppies are 50% (Retriever) or 25% (Chihuahua) the size of adults.

### 🎨 Customization
- **Nametags**: Use a renamed Nametag to give your dog a permanent name shown above its head.
- **Tail Indicator**: The height of your dog's tail tells you its health! (High = Healthy, Low = Hurt).

## 🛠 Build Instructions
To create the `.mcaddon` file for testing:
1. From the project root, run: `./package_addon.sh Dogz`

## 📜 Changelog

### [2.2.7] - 2026-03-23
#### Added
- **New Breed: German Shepherd**:
  - Health: 50 HP (25 Hearts).
  - Passive Regeneration: Heals 1 HP every 3 seconds.
  - Superior Guarding: 24-block monster/creeper detection and attack range.
  - Stronger Attack: Deals 6 damage (3 Hearts).
  - Massive Healing: Meat restores significantly more HP (10 HP for raw, 20 HP for cooked).
  - Guard Stance: Stays slightly further back from the owner (10-block follow start, 4-block stop).

### [2.2.6] - 2026-03-23
#### Fixed
- **Player Neutrality**: Dogs no longer attack players.
- **Nametag Distance**: Reduced visibility range of nametags.
- **Tail Height Logic**: Correctly matches health state.

### [2.2.5] - 2026-03-12
#### Fixed
- **Robust Revival**: Replaced `minecraft:healable` revival with a `minecraft:interact` handler that checks for meat items. This ensures the revival button actually functions and consumes the item to stand the dog back up.
- **Manifest Sync**: Verified and synced all manifest header, module, and dependency versions to 2.2.5.

### [2.2.4] - 2026-03-12
#### Fixed
- **Persistent Immortality**: Health and Damage sensors now reside in a `dogz:alive` group that is removed and re-added upon revival. This "re-arms" the sensors, fixing the bug where dogs would die after being revived once.
- **Bulletproof Death Prevention**: Now uses `has_damage: fatal` filter to intercept killing blows directly.
- **Improved Revival**: Dogs now drop to 1 HP while Downed, ensuring that feeding them meat always triggers the `on_heal` event to stand them back up.

### [2.2.3] - 2026-03-12
#### Fixed
- Fixed spawn health: Dogs no longer down in one hit when spawned, by lowering the threshold to 10 HP (Standard wolves have 20 HP).
- True Immortality: Threshold damage is now cancelled (`deals_damage: false`), ensuring the dog survives even massive hits by transitioning to Downed state.
- Explicit Healing: Added health reset to 100 on both spawn and revival events.

### [2.2.2] - 2026-03-12
#### Fixed
- **True Immortality**: Added `deals_damage: false` to the health threshold sensor. This prevents dogs from dying even if hit by massive damage (Creepers/TNT), as the fatal blow is now cancelled and replaced by the Downed state.
- **Fixed Spawn State**: Corrected starting health initialization to ensure dogs spawn at 100 HP (Healthy) instead of starting downed.

### [2.2.1] - 2026-03-12
#### Fixed
- Fixed Revival Interaction: Corrected the event sequence to ensure meat interactions successfully reset health and stand the dog back up.
- Added missing translation: `action.interact.revive` ("Revive Companion").

### [2.2.0] - 2026-03-12
#### Added
- **Immortal Companion Logic**: Dogs now have 100 Max HP with a "Safety Buffer".
- **Downed State**: When health drops below a threshold (80 for Retriever, 88 for Chihuahua), the dog collapses, whines, and becomes invulnerable.
- **Revival interaction**: Feed any meat to a downed dog to restore them to full health and active status.
#### Fixed
- Prevented dogs from dying to Creepers or high-damage attacks using the health buffer system.

### [2.1.0] - 2026-03-12
#### Added
- Full Creeper avoidance: Dogs now correctly identify as `"cat"` and `"ocelot"` across all states (Idle and Barking), triggering vanilla Creeper fear logic.
#### Fixed
- Restored 100% vanilla Creeper behavior by removing custom overrides.
- Verified stable targeting, swelling, and explosion mechanics for Creepers.

### [2.0.6] - 2026-03-12
#### Fixed
- Fixed persistent creeper fear: Added `"cat"` and `"ocelot"` families to the `dogz:barking_state` component group so the tags are not lost when the dog alerts.

### [2.0.5] - 2026-03-12
#### Fixed
- Deleted custom `creeper.json` override to restore perfect vanilla behavior (Targeting, Swelling, Explosion).
- Added `"cat"` and `"ocelot"` families to both dog entities to trigger the vanilla creeper fear response.

### [2.0.4] - 2026-03-12
#### Fixed
- Fixed Creeper explosion: Added missing `minecraft:explode` component to base entity.
- Verified: Creepers now follow, swell, and explode correctly.

### [2.0.3] - 2026-03-12
#### Fixed
- Fixed Creeper targeting: Added `minecraft:behavior.melee_attack` (track_target: true) to ensure Creepers follow the player.
- Aligned Creeper AI priorities with vanilla 1.21.
- Restored vanilla "slow down to swell" behavior.

### [2.0.2] - 2026-03-12
#### Fixed
- Complete restoration of vanilla Creeper behavior components (Swellable, Swell).
- Fixed malformed damage sensor.
- Maintained "Creeper Repellent" (fleeing dogs).

### [2.0.0] - Rebranding
#### Changed
- Rebranded from 'Good Boy' to 'Dogz'.
- Updated namespace from 'goodboy:' to 'dogz:' in all entities, items, and resource files.
- Version increment to 2.0.0.

### [1.4.28] - Active Development
#### Fixed
- Cleaned AI: Removed broken downed/immortal logic to restore stability.
- Fixed untamed dogs standing still by adding wild stroll behavior.

### [1.4.25]
#### Added
- Creeper Repellent: Creepers act normally but flee dogs/barking dogs.

### [1.4.23]
#### Fixed
- Restricted State Transitions: Fixed "Sit-Lay-Sit" bug. Dogs must stand up to switch between Sit and Lay states.

### [1.4.10]
#### Fixed
- Movement Lock: Movement set to 0.0 while sitting/laying to prevent sliding.
- Attack Cancellation: Dogs now forget attack targets when commanded to sit.

## ⚖️ Commit & Versioning Rules
1. **Stable UUIDs:** Once a mod version is stable, **DO NOT** change the `uuid` in `manifest.json`.
2. **Increment Version:** To update the mod, only increment the `version` array in `manifest.json`. This allows users to import it as an update without deleting the old version.
3. **Update README:** After every significant change, update the Roadmap in the `README.md` (move items from To-Do to Verified).
4. **Technical Log:** Consult the root `DEVELOPMENT_LOG.md` before making visual or geometry changes to avoid past glitches.
