# DAWGS+ Mod
Pure stable reference code and skeletal structures.

## 🛠 Build Instructions
To create the `.mcpack` files for testing:
1.  Zip the contents of the `BP/` folder and rename it to `dawgs_bp.mcpack`.
2.  Zip the contents of the `RP/` folder and rename it to `dawgs_rp.mcpack`.
3.  Zip these two `.mcpack` files together and rename it to `DAWGS+.mcaddon`.
    *   *Note: Always use ZIP compression, never tarballs.*

## 📜 Commit & Versioning Rules
1.  **Stable UUIDs:** Once a mod version is stable, **DO NOT** change the `uuid` in `manifest.json`.
2.  **Increment Version:** To update the mod, only increment the `version` array in `manifest.json`. This allows users to import it as an update without deleting the old version.
3.  **Update Roadmap:** After every significant change, update the `ROADMAP.md` (move items from To-Do to Verified).
