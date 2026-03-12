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
- [ ] **Creeper Fear**: Spawn a Creeper near the dog. Does the Creeper run away?
- [ ] **Creeper Safety**: Attack a Creeper. Does the dog ignore your command to attack it? (Expected: Dog should NOT attack creepers).
- [ ] **Creeper Swelling (v2.0.2)**: Spawn a Creeper with NO dog around. Does it slow down and swell for 1.5s before exploding?
- [ ] **Creeper Killable (v2.0.2)**: Can you kill a Creeper with a normal sword?
- [ ] **Creeper Targeting (v2.0.2)**: Does the Creeper actively track the player and move towards them (until it starts swelling)?

## 🧪 4. Immortality
- [ ] **Downed State**: Let a monster hit the dog until it whines and lays down. Does it stop attacking? Is it moaning?
- [ ] **Revival**: Feed the moaning dog some meat. Does it stand back up?

## 🧪 5. Breeding
- [ ] **Puppies**: Feed meat to two tamed dogs. Do they produce a tiny puppy?
- [ ] **Growth**: Feed meat to the puppy. Does it grow larger?

## 🧪 6. Visuals
- [ ] **Tail HP**: Hit the dog once. Does the tail lower slightly? Heal it. Does it rise?
