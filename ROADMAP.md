## 🐕 Dogz (Main Mod)
*High-fidelity dogs with advanced AI and survival mechanics.*

### 🟢 Verified
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
* **Restricted State Transitions (v1.4.23)**: Prevent direct Sit <-> Lay transitions. Standing -> Sit/Lay, Sitting -> Stand, Laying -> Stand.
* **Immortal/Revival Mechanic**: Logic is not yet reliable (Downed state needs better health-lock).

### ⚪ To-Do
1. **Creeper Repellent**: Re-implement vanilla-friendly fear logic without breaking hostiliy.
2. **Defense Mode when Attached**: Dogs guard a small radius when tied to a fence.
3. **Dyeable Collars**: Visible physical collar bones with support for 16 colors.
4. **Breeding & Puppies**: Enabling two adults to produce a baby.
5. **Puppy Growth**: AI and scale logic for babies growing into adults.
6. **Mixed Breeding**: Logic for cross-breeding different dog types.
7. **Tail HP Indicator**: Health-based tail height (Requires safe Molang).
8. **Begging Animation**: Head tilt when holding food (Requires safe Molang).
9. **Smooth Update Protocol**: Transition to version-only updates (locking UUIDs) to allow mod updates without reinstallation.

---
