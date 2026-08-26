# PROYECTOLIKE — DESIGN UPDATE
## Consolidated decisions approved after the original SPEC

> This document consolidates design decisions approved later in the conversation. It is design-only and must NOT trigger implementation.

## 1. Team / roster / recruitment

### Start
- Maximum roster: 6 participants.
- Start a new run by presenting exactly 3 eligible random participants.
- Player chooses exactly 1.
- Starting roster = 1 participant.

### Recruitment
- Recruitment happens at occasional RECRUITMENT nodes.
- Each recruitment node presents exactly 3 candidates.
- Player can recruit 1.
- A participant already owned by the player can never appear again in that run.
- The same participant cannot appear twice among the 3 candidates of one recruitment event.
- Candidate archetype similarity is allowed; do not force artificial diversity.
- Unselected candidates may appear again later according to run seed/randomness rules.
- If roster is already 6/6, recruiting requires dismissing one current participant.
- The dismissed participant disappears permanently for that run and cannot return.
- Newly recruited participants enter at a level appropriate to the current run progression.
- DOWNED participants do not gain XP.

### Participant source
- Playable names come from the real Proyecto C event roster already present on the website (roughly 60 participants).
- Do not invent a separate fictional roster.
- Initial archetype assignment should be approximately based on profession/role and can be refined later.

## 2. Combat: 6v6, fully automatic

- Combat is 6v6 when both sides have six available combatants.
- Each side has 6 positions:
  - FRONT x2
  - MIDDLE x2
  - REAR x2
- Player can freely position living participants before combat.
- Formation locks when combat starts.
- No manual actions during combat: no attack, defend, heal, target, reposition, or continue-turn buttons.
- Internal timing cycles are allowed, but combat is presented as continuous automatic combat.
- There is NO reserve system.
- DOWNED participants leave their position empty; nobody automatically replaces them.

## 3. Primary stats

- HP = maximum health.
- ATK = attack power.
- DEF = defense.
- VEL = frequency of action.

Reference archetype ranges:
- HP about 60–150
- ATK about 8–35
- DEF about 5–30
- VEL about 4–12

VEL is not merely initiative. Higher VEL means shorter action interval.

Reference action intervals:
- 4 → 1.60s
- 5 → 1.45s
- 6 → 1.30s
- 7 → 1.18s
- 8 → 1.08s
- 9 → 0.99s
- 10 → 0.91s
- 11 → 0.84s
- 12 → 0.78s

Effective VEL can be changed by weapons, buffs and debuffs. Suggested engine clamp: 1–20.

## 4. The 13 archetypes

1. TANQUE
2. OFFTANK
3. ASESINO
4. FRANCOTIRADOR
5. MÉDICO
6. DEMOLICIONES
7. ASALTO
8. HOSTIGADOR
9. INGENIERO
10. BERSERKER
11. SUPERVIVIENTE
12. SOPORTE
13. CONTROLADOR

Reference profiles:

| Archetype | HP | ATK | DEF | VEL | Typical range |
|---|---:|---:|---:|---:|---|
| TANQUE | 150 | 14 | 30 | 4 | I |
| OFFTANK | 125 | 23 | 24 | 6 | I-II |
| ASESINO | 70 | 35 | 7 | 12 | I-II |
| FRANCOTIRADOR | 65 | 34 | 6 | 6 | III |
| MÉDICO | 90 | 10 | 19 | 7 | II-III |
| DEMOLICIONES | 100 | 24 | 15 | 5 | II-III |
| ASALTO | 105 | 27 | 16 | 9 | I-II |
| HOSTIGADOR | 85 | 20 | 11 | 11 | II-III |
| INGENIERO | 95 | 19 | 18 | 7 | II-III |
| BERSERKER | 120 | 30 | 14 | 8 | I |
| SUPERVIVIENTE | 110 | 22 | 20 | 7 | I-II |
| SOPORTE | 85 | 14 | 17 | 8 | II-III |
| CONTROLADOR | 85 | 18 | 15 | 8 | II-III |

These are PROYECTOLIKE design values, not official Project Zomboid stats.

## 5. Archetype automatic behavior

General rule:
- When a character gets its action opportunity, it checks its archetype condition.
- If the condition applies, the archetype action is performed.
- Otherwise it performs its normal attack.
- No passive needs a manual button.

### TANQUE — PROVOCACIÓN
- Frontline protector.
- While alive in FRONT, enemies that would normally target FRONT preferentially target the Tank.
- About 15% less direct damage received.
- Does not reduce AoE damage.

### OFFTANK — GUARDIA
- About 20% chance to reduce a direct hit against an ally in the same zone by 30%.
- Otherwise attacks normally.

### ASESINO — EJECUCIÓN
- Prioritizes enemies at or below 30% HP.
- Deals about +50% damage against targets at or below 30% HP.

### FRANCOTIRADOR — OBJETIVO PRIORITARIO
- Within range, prioritizes enemy with highest ATK; tie → highest HP.
- With a Range III weapon, +10% damage.

### MÉDICO — TRIAJE
When its action occurs:
1. If a living ally is below 60% HP, heal.
2. Heal ally with lowest HP percentage.
3. If nobody needs healing, attack normally.
- Healing = about 20% of target max HP.
- Cannot revive.
- Cannot heal DOWNED.
- Does not self-heal from this passive.

### DEMOLICIONES — ÁREA
- Uses automatic AoE attack.
- Primary target 100% damage.
- Second target 50%.
- Third target 35%.
- AoE only affects valid targets within weapon range.

### ASALTO — RÁFAGA
- Two quick impacts.
- Each impact about 60% of normal damage.
- Total theoretical damage about 120% before other modifiers.

### HOSTIGADOR — ACOSO
- On hit, applies -10% DEF to target for about 3s.
- Does not stack; reapplication refreshes duration.

### INGENIERO — APROVECHAMIENTO
- Shared inventory is checked when combat starts.
- Each non-equipped item gives +1% ATK and +1% DEF.
- Maximum 10 counted items.
- Equipped items do not count.
- Bonus recalculates at combat start.

### BERSERKER — FURIA
ATK bonus by current HP:
- >75% = 0%
- 51–75% = +5%
- 26–50% = +10%
- <=25% = +20%
At <=25% HP also +10% VEL.
No separate stacking; derived from current HP.

### SUPERVIVIENTE — ADAPTACIÓN
Small equipment-dependent bonuses:
- melee → +5% DEF
- pistol/revolver → +5% VEL
- rifle → +5% ATK
- shotgun → small survivability/HP contribution bonus
- explosive → +5% ATK and +5% area damage
- no item → +5% DEF
Do not introduce a new primary stat just for this.

### SOPORTE — MORAL
When its action occurs:
- Prefer an ally without the selected buff.
- If all have buffs, prefer one whose buff is near expiration.
- Apply one random supported buff.
Possible buffs:
- +10% ATK
- +10% DEF
- +10% VEL
- +1 Range
- -10% damage received
Rules:
- never increases max HP;
- never heals;
- same buff type does not stack;
- reapplication refreshes duration;
- different buff types can coexist;
- reference duration about 6s.

### CONTROLADOR — CONTROL
When its action occurs:
- Prefer high-ATK enemies without the selected debuff.
Possible debuffs:
- DEBILITAR: -15% ATK for about 5s
- RALENTIZAR: -20% VEL for about 5s
- EXPONER: -15% DEF for about 5s
- DESORIENTAR: -1 Range for about 5s, minimum Range I
Rules:
- same debuff type does not stack on one enemy;
- if all valid enemies are already usefully debuffed, attack normally.

## 6. Formation and range

Formation:
```text
FRONT       [1] [2]
MIDDLE      [3] [4]
REAR        [5] [6]
```

- Any living participant can be placed anywhere before combat.
- Recommended positions are not hard restrictions.
- Formation is locked during combat.
- If a participant becomes DOWNED, their position stays empty.

Range:
- Range I = short.
- Range II = medium.
- Range III = long.

Distance:
- FRONT = 1
- MIDDLE = 2
- REAR = 3

Range I:
- normally reaches FRONT;
- if no valid target in FRONT, searches MIDDLE;
- then REAR.

Range II:
- normally reaches FRONT + MIDDLE;
- if both empty, searches REAR.

Range III:
- can reach all rows.

Archetype targeting cannot exceed effective range.

## 7. Targeting

Default:
- attack the nearest valid living enemy within range.

If preferred row is empty, search the next reachable row.

Same-row ties are treated as essentially equal distance.

Tie-break priority:
1. archetype priority;
2. lower HP percentage;
3. deterministic positional/seed tie-break.

Examples:
- Assassin → low-HP target.
- Sniper → high-ATK target.
- Controller → high-ATK target without its intended debuff.

Enemies use the same framework and can also have archetypes/passives.

## 8. Damage and timing

Base damage:
- `ATK effective - DEF effective`
- minimum 1
- small ±10% variance
- buffs/debuffs modify effective stats in real time.

Criticals:
- default about 5% chance
- default +50% damage
- certain equipment may modify crit chance.

Time:
- individual action timers per unit.
- when timer reaches trigger: passive check → action → timer resets.
- small deterministic initial offset is acceptable.
- no visible manual turns.
- combat can be rendered around real-time 1x for the player.

## 9. DOWNED / recovery

When HP reaches 0:
- participant becomes DOWNED;
- stops acting;
- cannot be targeted as a living unit;
- cannot be healed by Medic;
- keeps equipment, XP and level;
- remains visible as DOWNED;
- position stays empty;
- no reserve replacement.

DOWNED persists between combats.

REST:
- standing participants heal +30% max HP;
- never revives DOWNED;
- no object cost.

HOSPITAL:
- standing participants → 100% HP;
- all DOWNED → revived at 40% max HP;
- clears medical negative states;
- -2 run noise;
- no cost;
- no combat risk;
- rare/high-value node, target 1–2 opportunities per act;
- appearance probability can increase when many participants are DOWNED.

All 6 participants DOWNED = run defeat.

## 10. Equipment and inventory

Shared inventory:
- one inventory for the whole run;
- items can be stored and later used in nodes/events;
- multiple weapons can be carried;
- only equipped items affect combat.

Equipment:
- max 1 equipped item per participant;
- weapons do not break;
- NO durability;
- NO weight mechanic;
- NO ammunition mechanic;
- NO reloading;
- firearms can always attack.

Removed:
- ammunition tracking;
- weapon durability;
- weight/encumbrance;
- Noise Maker.

## 11. Noise

Noise is a property of the equipped loadout, not a per-shot counter.

Each equipped weapon/item has a NOISE stat.

The combat/loadout noise is derived from equipped gear.

Firing one shotgun once or many times does NOT multiply the weapon's noise for the run's noise calculation.

## 12. Weapon progression

Normal weapons can have:
- Version I
- Version II
- Version III

Higher versions are stronger and/or gain improved properties.

Loot progresses with run/act progression so early-game equipment does not trivially carry the whole run.

Not every unique/special weapon needs all three versions.

## 13. Current thematic weapon catalogue

Melee:
- Kitchen Knife
- Hunting Knife
- Screwdriver
- Hammer
- Wrench
- Crowbar
- Baseball Bat
- Nailed Baseball Bat
- Spear
- Spear with Knife
- Hand Axe
- Wood Axe
- Machete
- Katana
- Sword
- Pickaxe

Firearms:
- M9
- M1911
- D-E
- M36
- M625
- Magnum
- MSR700
- MSR788
- M14
- M16
- JS-2000
- Double Barrel
- Sawed-off JS-2000
- Sawed-off Double Barrel

Special:
- Molotov I
- Molotov II
- Pipe Bomb
- Smoke Bomb

Weights and ammunition are intentionally absent.

## 14. Explicit overrides to older drafts

The following older concepts are no longer valid:
- no 3 deployed + 3 reserve system;
- combat is 6v6;
- no manual turn/continue controls;
- no manual targets;
- no ammunition;
- no weapon durability;
- no weight;
- no Noise Maker;
- no per-shot noise accumulation;
- no direct selection of 6 characters at run start;
- run starts with 1 of 3 candidates;
- recruitment happens in occasional nodes;
- full roster recruitment requires dismissing one existing participant.

## 15. Status of this update

Treat the above as **LOCKED design** unless explicitly changed later.

Still pending:
- exact XP/level curve;
- exact recruited-level formula;
- exact participant → archetype mappings;
- exact per-participant stat variation;
- exact loot probabilities;
- exact node generation;
- act progression tuning;
- exact numerical balance of every weapon/version;
- exact run-noise consequences;
- relics;
- milestones;
- events;
- major encounters;
- final victory details;
- save/resume details.
