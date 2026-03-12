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

## 🐕 Dog Behavior Guide
This guide explains how to interact with your new dogs and details their advanced AI behaviors.

### Breeds
1. **Golden Retriever**: Loyal, high health (20 HP), balanced speed.
2. **Chihuahua**: Small, agile, faster movement, lower health (12 HP).

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
