# Primitives, put to work in a game

Ten small functions: three on booleans, two on numbers, two on strings, and
three on nothing (`null` and `undefined`). Each one is a single line, and none
of them needs `if`. The operators from the *Values, types and operators* module
are enough.

Together they make a small toolkit, and `src/game.js` uses every one of them. It
prints the turn report for a two-player dungeon game: whose turn it is, what a
trap did to the hero's health, what she can do next, and so on. You write the
toolkit; the game is already written. Each function you finish fixes a line of
the report.

## What each part leans on

| Part | File | Lessons |
|---|---|---|
| 1 `not`, `and`, `or` | `src/booleans.js` | Comparing and combining |
| 2 `remainder`, `flipSign` | `src/numbers.js` | Arithmetic operators |
| 3 `firstAndLastCharacter`, `snakecase` | `src/strings.js` | Working with strings |
| 4 `isNull`, `isUndefined`, `isNil` | `src/nothing.js` | When there is nothing there; Equality: == versus === |

Every part also leans on *Writing a function's answer*: where `input`, `a` and
`b` get their values, how to turn a function's description into the line you
write, and why answering `not(input)` inside `not` never finishes.

## Getting started

1. Open **your repository**. It is made for you: private, and named for this
   homework, the term and your username — `<term>-cs140-primitives-game-<you>`. On
   [this homework's page](https://wwcc.dev/#/lesson/primitives-game), type your GitHub
   username and click **Open my Codespace**. On your own computer, clone it
   with GitHub Desktop (**Code**, then **Open with GitHub Desktop**) and check
   that `node --version` prints 22 or later. The lesson *How a homework works*
   walks through both.
2. Run the game:

   ```sh
   npm start
   ```

   Most of the report says `undefined` or `NaN`. `undefined` is what a function
   sends back when it has no `return` yet, and arithmetic with `undefined` gives
   `NaN`. That is the starting point.
3. Run the tests:

   ```sh
   npm test
   ```

   Every test fails at first. That is the starting point too, not a problem.

While you work on one part, run just its tests:

```sh
node --test test/2-numbers.test.js
```

The same tests run on GitHub every time you push. The **Actions** tab shows
the result.

## How to write each answer

Every function is already written except for the middle. Each one looks like
this:

```js
export function double(n) {
  // TODO: put your code here
}
```

Write your answer between the braces, and put `return` in front of it.
`return` sends the value out of the function, so the tests and the game can use
it. The Functions module explains the rest.

```js
export function double(n) {
  return n * 2;
}
```

The name in the parentheses, `n` here, is the value handed in. Use that name in
your answer.

Leave `export` in front of each function. It is what lets the tests and the game
use it.

Stuck? `console.log(something)` inside a function prints it when the tests or
the game run. The tests do not look at what you print, so print as much as you
like.

## Using an AI assistant

`AGENTS.md` in this repository tells AI coding assistants how this course wants
them to help: as a tutor who explains errors, asks questions and gives hints,
not by writing your answers. Most assistants read it automatically. It is in
the open, so read it too. It says what good AI help looks like.

In this homework's Codespace, AI code suggestions are switched off
(`.vscode/settings.json`), so the code you hand in is your own. Chat is on,
and it follows `AGENTS.md`: ask it about an error, a failing test or an idea.

## The parts

The comment above each function says what it receives and what it sends back,
with examples. When a test fails, its message says what came back and what to
look at.

### Part 1 · Booleans — `src/booleans.js`

`not`, `and` and `or` do what `!`, `&&` and `||` do. The game uses them to
decide whether the hero can act this turn and whether she needs a potion.

### Part 2 · Numbers — `src/numbers.js`

`remainder(7, 4)` is `3`: what is left over after dividing, not how many times
it fits. The game uses it to work out whose turn it is. Players take turns in a
circle, and the remainder of the turn number divided by the number of players
says where in the circle you are.

`flipSign(5)` is `-5`, and `flipSign(-5)` is `5`. The game uses it to turn a
trap's damage into a change in health.

### Part 3 · Strings — `src/strings.js`

`firstAndLastCharacter("JavaScript")` is `"Jt"`. The door in the game opens for
the first and last letters of the hero's name.

`snakecase("JavaScript Rules!")` is `"javascript_rules!"`. The game names its
save file with it. This one uses a method the lessons have not shown:
`text.replaceAll(" ", "_")` gives a copy of `text` with every space swapped for
an underscore.

### Part 4 · Nothing — `src/nothing.js`

`isNull` asks "is this `null`?", `isUndefined` asks "is this `undefined`?", and
`isNil` asks "is this either one?". The hero's shield broke, so it is `null`;
she never learned a spell, so it is `undefined`. `0`, `""` and `false` are values
that are *there*, and all three functions say `false` for them.

## Done means

- `npm test` passes every test.
- `npm start` prints a report with no `undefined` and no `NaN` in it.
