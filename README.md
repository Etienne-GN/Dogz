# Dogz
High-fidelity dogs with advanced AI and survival mechanics.

## 🗺 Roadmap

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
4. **Defense Mode when Attached**: Dogs guard a small radius when tied to a fence.
5. **Dyeable Collars**: Visible physical collar bones with support for 16 colors.
6. **Breeding & Puppies**: Enabling two adults to produce a baby.
7. **Puppy Growth**: AI and scale logic for babies growing into adults.
8. **Mixed Breeding**: Logic for cross-breeding different dog types.
9. **Tail HP Indicator**: Health-based tail height (Requires safe Molang).
10. **Begging Animation**: Head tilt when holding food (Requires safe Molang).
11. **Smooth Update Protocol**: Transition to version-only updates (locking UUIDs) to allow mod updates without reinstallation.

## 🛠 Build Instructions
To create the `.mcaddon` file for testing:
1. Zip the contents of the `BP/` folder and rename it to `dogz_bp.mcpack`.
2. Zip the contents of the `RP/` folder and rename it to `dogz_rp.mcpack`.
3. Zip these two `.mcpack` files together and rename it to `dogz.mcaddon`.
   * *Note: Always use ZIP compression, never tarballs.*

## 📜 Commit & Versioning Rules
1. **Stable UUIDs:** Once a mod version is stable, **DO NOT** change the `uuid` in `manifest.json`.
2. **Increment Version:** To update the mod, only increment the `version` array in `manifest.json`. This allows users to import it as an update without deleting the old version.
3. **Update README:** After every significant change, update the Roadmap in the `README.md` (move items from To-Do to Verified).
4. **Follow the Log:** Consult `GOODBOY_DEVELOPMENT_LOG.md` before making visual or geometry changes to avoid past glitches.
