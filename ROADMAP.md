## 🐕 Dogz (Main Mod)
*High-fidelity dogs with advanced AI and survival mechanics.*

### 🟢 Verified
* **Creeper Repellent (v1.4.25)**: Creepers act normally but flee dogs/barking dogs (Priority 1).
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
* **Cleaned AI (v1.4.28)**: Removed broken downed/immortal logic to restore stability. Fixed untamed dogs standing still by adding wild stroll behavior.

### ⚪ To-Do
1. **Immortal/Revival Mechanic**: Re-implement downed state (at 1HP) with invulnerability and slow health regen.
2. **Untamed Fall Damage**: Fix bug where wild dogs take no fall damage.
3. **Proper Death Messages**: Fix "Unknown died" messages by ensuring default naming logic.
2. **Defense Mode when Attached**: Dogs guard a small radius when tied to a fence.
3. **Dyeable Collars**: Visible physical collar bones with support for 16 colors.
4. **Breeding & Puppies**: Enabling two adults to produce a baby.
5. **Puppy Growth**: AI and scale logic for babies growing into adults.
6. **Mixed Breeding**: Logic for cross-breeding different dog types.
7. **Tail HP Indicator**: Health-based tail height (Requires safe Molang).
8. **Begging Animation**: Head tilt when holding food (Requires safe Molang).
9. **Smooth Update Protocol**: Transition to version-only updates (locking UUIDs) to allow mod updates without reinstallation.

---
