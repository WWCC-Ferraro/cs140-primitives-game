// The game. You do not need to change anything in this file.
//
// It prints the turn report for a small two-player dungeon game, and every
// line of the report is worked out by one of the functions you are writing.
// Run it whenever you like:
//
//   npm start
//
// Before you finish a function, its part of the report shows `undefined` or
// `NaN` — `undefined` is what a function sends back when it has no `return`
// yet, and arithmetic with `undefined` gives `NaN`. Finish the function, run
// the game again, and that line comes right.
//
// The `import` lines bring in the functions you write in the other four files.

import { not, and, or } from './booleans.js';
import { remainder, flipSign } from './numbers.js';
import { firstAndLastCharacter, snakecase } from './strings.js';
import { isNull, isUndefined, isNil } from './nothing.js';

// ─── The game so far ───────────────────────────────────────────────────────

const gameTitle = 'Dungeon of the Lost Semicolon';
const playerCount = 2;
const turn = 7;               // turns count up from 0 and never reset

const heroName = 'Grace';
const heroPlayer = 2;         // Grace is player 2
const heroHealth = 40;
const trapDamage = 12;        // the trap Grace just stepped on
const isPoisoned = false;

const shield = null;          // Grace's shield broke last turn
let spell;                    // Grace has never learned a spell

// ─── Whose turn is it? ─────────────────────────────────────────────────────
// Players take turns in a circle: 0, 1, 0, 1, ... The remainder of the turn
// number divided by the number of players says where in the circle we are.
// Players are numbered from 1, so add 1.

const currentPlayer = remainder(turn, playerCount) + 1;
const isHerosTurn = currentPlayer === heroPlayer;

// ─── The trap ──────────────────────────────────────────────────────────────
// Damage is a positive number. Health goes down by it, so flip its sign and
// add it.

const healthChange = flipSign(trapDamage);
const newHealth = heroHealth + healthChange;

// ─── What can Grace do? ────────────────────────────────────────────────────

const isKnockedOut = newHealth <= 0;
const canAct = and(isHerosTurn, not(isKnockedOut));
const needsPotion = or(isPoisoned, newHealth < 30);

// ─── Shield and spell ──────────────────────────────────────────────────────

const shieldBroken = isNull(shield);
const neverLearnedSpell = isUndefined(spell);
const defenceless = and(isNil(shield), isNil(spell));

// ─── The door and the save file ────────────────────────────────────────────
// The door opens for the first and last letters of the hero's name.

const password = firstAndLastCharacter(heroName);
const saveFile = snakecase(gameTitle) + '.save';

// ─── The report ────────────────────────────────────────────────────────────

console.log(`=== ${gameTitle} · turn ${turn} ===`);
console.log(`Player ${currentPlayer} to move. ${heroName}'s turn: ${isHerosTurn}`);
console.log(`Trap! Health ${heroHealth} changes by ${healthChange}, to ${newHealth}`);
console.log(`Can act: ${canAct}   Needs a potion: ${needsPotion}`);
console.log(`Shield broken: ${shieldBroken}   Never learned a spell: ${neverLearnedSpell}`);
console.log(`Defenceless: ${defenceless}`);
console.log(`The door's password: ${password}`);
console.log(`Saving to ${saveFile}`);
