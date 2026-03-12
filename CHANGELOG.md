# Changelog: Dogz

## [1.4.28] - Active Development
### Fixed
- Cleaned AI: Removed broken downed/immortal logic to restore stability.
- Fixed untamed dogs standing still by adding wild stroll behavior.

## [1.4.25]
### Added
- Creeper Repellent: Creepers act normally but flee dogs/barking dogs.

## [1.4.23]
### Fixed
- Restricted State Transitions: Fixed "Sit-Lay-Sit" bug. Dogs must stand up to switch between Sit and Lay states.

## [1.4.10]
### Fixed
- Movement Lock: Movement set to 0.0 while sitting/laying to prevent sliding.
- Attack Cancellation: Dogs now forget attack targets when commanded to sit.
