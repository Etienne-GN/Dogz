# Good Boy Mod: Technical Knowledge Base & Evolution Log

This document serves as an architectural record and troubleshooting guide for the "Good Boy" Minecraft Bedrock addon project. It captures the lessons learned from visual glitches, AI failures, and engine-specific quirks discovered during development.

## 1. Project Overview
- **Good Boy (`@good_boy/`)**: The primary production mod featuring high-fidelity Chihuahua and Retriever breeds with advanced sitting, laying, and protection behaviors.
- **DAWGS+ (`@DAWGS+/`)**: A stabilized reference framework used to troubleshoot skeletal structures and provide a functional baseline for breed integration.
- **VillagerCTL**: A specialized utility mod for villager management.

---

## 2. The Evolution of Glitches (Historical Eras)

### 🦖 The Stegosaurus Era (Pivot & Hierarchy Failures)
- **Symptom**: The dog's tail or back fur appeared as giant vertical spikes or "scales" pointing toward the sky.
- **Root Cause**: Inverted Y-origins within the geometry file. In Minecraft Bedrock, if a cube's origin is numerically higher than its bone pivot, the engine often renders it upside down during certain animations.
- **Solution**: Re-aligning all bone pivots to the base of the bone and ensuring all attached cubes have Y-origins lower than the pivot point.

### 🦔 The Hedgehog Era (UV & Orientation Mismatches)
- **Symptom**: The model appeared correctly shaped but covered in jagged, misaligned texture fragments, resembling a hedgehog.
- **Root Cause**: Swapped labels between the "Tail" and "Tail_Fur" cubes in the geometry logic compared to the PNG texture layout. We were applying the solid tail texture to the fur cubes and vice versa.
- **The "Submarine" Analogy**: We realized the tail was like an upside-down submarine; the model needed a 180-degree barrel roll, but only for specific sub-bones, to align the texture correctly.

### 👻 The Semi-Transparent Era (Material Conflicts)
- **Symptom**: The Golden Retriever appeared like a ghost or had large black spots on its belly and tail.
- **Root Cause**:
    1. **Black Spots**: Caused by `entity_nocull` rendering the inside faces of overlapping cubes, which the engine shaded as black.
    2. **Transparency**: `entity_alphatest` being too sensitive to 0% alpha pixels in custom PNGs.
- **Solution**: Reverting to `entity` or a clean `entity_alphatest` mapping and ensuring the PNG textures have solid backgrounds (no hidden transparency data).

### 🔇 The Silent Visual Crash Era (Molang Complexity)
- **Symptom**: The dog would obey commands (stop moving) but the animations (Sit/Lay) would not play. The model stayed in its default standing pose.
- **Root Cause**: Invalid or overly complex Molang expressions in the animation file. If Minecraft encounters a math error in a *single* bone's rotation (like a health-based tail height), it often discards the **entire animation file** for that entity without showing an error.
- **Solution**: **Surgical Stripping**. Revert the animation file to a "Stability Baseline" (v1.1.9) by removing all complex math, verifying the core poses work, and then re-introducing features one-by-one.

---

## 3. Key Technical Lessons (Knowledge Base)

### 🧠 AI & Behavior Logic
- **Hard State Removal**: Minecraft's Goal Selector often gets stuck. To stop a dog from following, do not just lower the priority; **remove the component group** containing the `follow_owner` behavior entirely.
- **Creeper Safety**: Overriding vanilla mobs (like Creepers) requires including their **entire** original component set. If you only add "fear," you break their "explode" and "track" logic.
- **The "is_sheared" Flag**: Using vanilla components like `minecraft:is_sheared` or `minecraft:is_baby` as internal flags is an effective way to sync custom states (like "Laying Down") from the Behavior Pack to the Resource Pack animations.

### 🦴 Geometry & Animation
- **Bone Parenting**: Always parent the **Head** to the **Body**. If the Head is a child of the Root, it will detach and float away when the dog sits or tilts its body.
- **Counter-Rotation**: When a dog sits (body tilts -37.5°), the Tail and Head must have a positive rotation (+37.5°) to remain horizontal relative to the world.
- **Shared Pivots**: To prevent detachment during movement, the Main Bone and its Fur sub-bones **must** share the exact same pivot coordinates.
- **Molang Fragility**: Never put complex math directly into the animation bone rotations unless verified. A single syntax error can disable all animations for that dog. Use `query.health / query.max_health` cautiously and ensure the bone target exists.

### 🛠️ The "Minecraft Cache" Problem
- **The UUID Rule**: Minecraft identifies mods by UUID, not by filename. If you change a 3D model but keep the same UUID, the game will **refuse** to load the new model.
- **Fix**: Every major structural change requires a **Version Bump** and **Fresh UUIDs** in the `manifest.json`.

---

## 4. Maintenance Best Practices
1. **Packs Removal**: Always delete the old pack from Minecraft Storage before importing a new version.
2. **Standardization**: Keep identifiers unique (e.g., `goodboy:retriever` vs `dogs:retriever`) to prevent mod conflicts.
3. **Texture Layouts**: Always verify that the `texture_width` and `texture_height` in the `.geo.json` match the actual dimensions of the PNG.

---
**Document Version:** 1.0 (v1.1.9 Release)
**Author:** Gemini CLI Modding Agent
