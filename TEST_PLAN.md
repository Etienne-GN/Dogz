# Dogz v2.0.0: Verification Test Plan

Follow these steps to confirm all features are working correctly.

## 🧪 1. Survival & Mobility
- [ ] **Temptation**: Hold a Bone or Steak near a wild dog. Does it follow you?
- [ ] **Taming**: Use a bone to tame it. Does the collar appear?
- [ ] **Nametag**: Rename a nametag in an anvil and apply it. Is the name visible?
- [ ] **Leash**: Attach a lead. Does the dog walk closer to you than when unleashed?

## 🧪 2. Commands & States
- [ ] **Sit**: Stand and Interact. Does the dog sit?
- [ ] **Stand from Sit**: Interact with a sitting dog. Does it stand and follow?
- [ ] **Lay Down**: Crouch and Interact while standing. Does the dog lay on the ground?
- [ ] **Stand from Lay**: Crouch and Interact while laying. Does the dog stand up?
- [ ] **Restricted Transitions**: 
    - [ ] While sitting, Crouch + Interact. Does the dog remain sitting (instead of laying)?
    - [ ] While laying, standard Interact. Does the dog remain laying (instead of sitting)?
- [ ] **Head Tilt**: While sitting or standing, hold meat. Does the dog tilt its head cute-ly?

## 🧪 3. Combat & Protection
- [ ] **Owner Defense**: Attack a mob (e.g., a pig). Does the dog attack it?
- [ ] **Alert**: Spawn a Zombie 10 blocks away. Does the dog bark 3 times?
- [ ] **Persistent Creeper Fear (v2.0.6)**: Bring a Creeper near the dog. When the dog starts barking (the alert phase), does the Creeper **keep** running away?
- [ ] **Creeper Safety**: Attack a Creeper. Does the dog ignore your command to attack it? (Expected: Dog should NOT attack creepers).
- [ ] **Vanilla Creeper Behavior (v2.0.5)**: With NO dog around, does the Creeper track you, swell, and explode exactly like vanilla?

## 🧪 4. Immortality (v2.2.2)
- [ ] **Spawn State**: Use a Spawn Egg. Does the dog spawn standing up (Healthy)?
- [ ] **Standard Downed**: Hit a dog until it whines and lays down. Does it stop attacking? Is it moaning?
- [ ] **Invulnerability**: While the dog is downed, try to hit it. Does it take any damage? (Expected: NO damage).
- [ ] **Creeper Survival**: Let a Creeper explode next to a healthy dog. Does the dog survive and enter the downed state?
- [ ] **Revival**: Feed the moaning dog some meat. Does it stand back up at full health?

## 🧪 5. Breeding
- [ ] **Puppies**: Feed meat to two tamed dogs. Do they produce a tiny puppy?
- [ ] **Growth**: Feed meat to the puppy. Does it grow larger?

## 🧪 6. Visuals
- [ ] **Tail HP**: Hit the dog once. Does the tail lower slightly? Heal it. Does it rise?
