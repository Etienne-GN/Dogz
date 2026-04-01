# Dogz v2.2.7: Verification Test Plan

Follow these steps to confirm all features are working correctly.

## 🧪 1. Survival & Mobility
- [ ] **Temptation**: Hold a Bone or Steak near a wild dog. Does it follow you?
- [ ] **Taming**: Use a bone to tame. Does the collar appear?
- [ ] **Nametag**: Rename a nametag in an anvil and apply it. Is the name visible (not from excessive distance)?
- [ ] **Leash**: Attach a lead. Does the dog walk closer to you than when unleashed (2-block radius)?

## 🧪 2. Commands & States
- [ ] **Sit**: Interact while standing. Does the dog sit?
- [ ] **Stand from Sit**: Interact with a sitting dog. Does it stand and follow?
- [ ] **Lay Down**: Crouch + Interact while standing. Does the dog lay down?
- [ ] **Stand from Lay**: Crouch + Interact while laying. Does the dog stand up?
- [ ] **Restricted Transitions**:
    - [ ] While sitting, Crouch + Interact. Does the dog stay sitting (NOT lay down)?
    - [ ] While laying, standard Interact. Does the dog stay laying (NOT sit)?

## 🧪 3. Combat & Protection
- [ ] **Owner Defense**: Attack a mob (e.g., a pig). Does the dog attack it?
- [ ] **Player Neutrality (v2.2.6)**: Have another player approach. Does the dog NOT attack them?
- [ ] **Alert**: Spawn a Zombie 10 blocks away. Does the dog bark 3 times rapidly?
- [ ] **Creeper Repellent**: Bring a Creeper near the dog. Does the Creeper run away?
- [ ] **Creeper Fear Persistence (v2.0.6)**: Wait until the dog starts barking. Does the Creeper **continue** fleeing during the alert phase?
- [ ] **Creeper Safety**: Attack a Creeper near your dog. Does the dog refuse to attack it?
- [ ] **Vanilla Creeper (no dog)**: Verify a Creeper tracks you, swells, and explodes normally without a dog nearby.

## 🧪 4. Immortal Companion System (v2.2.5)
- [ ] **Spawn State**: Use a Spawn Egg. Does the dog spawn standing (Healthy), not downed?
- [ ] **Downed State**: Hit a dog until it whines and lays down. Does it enter the downed state?
- [ ] **Invulnerability**: While downed, hit the dog. Does it take zero damage?
- [ ] **Revival Button**: Hold any meat near a downed dog. Does the "Revive Companion" button appear?
- [ ] **Button Works**: Click Revive. Does the dog stand up and return to full health? Is the meat consumed?
- [ ] **Cycling Test**: After revival, down the dog again. Does the downed state trigger correctly a second and third time?
- [ ] **High Damage Survival**: Hit a healthy dog with a Creeper explosion or TNT. Does it enter downed state instead of dying?

## 🧪 5. Breeds (v2.2.7)
- [ ] **Golden Retriever**: Spawn. Verify 20 HP baseline.
- [ ] **Chihuahua**: Spawn. Verify smaller model and faster movement.
- [ ] **German Shepherd (v2.2.7)**:
    - [ ] Spawn. Verify 50 HP (25 hearts).
    - [ ] Wait 3 seconds without feeding. Does it passively regen 1 HP?
    - [ ] Feed Raw Meat. Does it heal ~10 HP?
    - [ ] Feed Cooked Meat. Does it heal ~20 HP?
    - [ ] Spawn a Zombie 20+ blocks away. Does the Shepherd detect and attack it (24-block range)?

## 🧪 6. Visuals (v2.2.6)
- [ ] **Tail HP Indicator**: Hit the dog once. Does the tail lower? Heal it. Does it rise back up?
- [ ] **Nametag Distance**: Stand far away (30+ blocks). Is the nametag hidden at that distance?

## 🧪 7. Breeding
- [ ] **Puppies**: Feed meat to two tamed adults. Do they produce a puppy?
- [ ] **Growth**: Feed meat to the puppy. Does it grow larger?
