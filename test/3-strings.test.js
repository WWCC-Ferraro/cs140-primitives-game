// Part 3 — firstAndLastCharacter, snakecase
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from 'node:util';
import { firstAndLastCharacter, snakecase } from '../src/strings.js';

const show = (v) => inspect(v);

function check(call, got, expected, hint) {
  assert.equal(got, expected, `${call} should be ${show(expected)}, but it gave ${show(got)}. ${hint}`);
}

test('firstAndLastCharacter joins the first and last characters', () => {
  const hint = 'Indexes start at 0, and the last one is length - 1. See "Working with strings".';
  check('firstAndLastCharacter("JavaScript")', firstAndLastCharacter('JavaScript'), 'Jt', hint);
  check('firstAndLastCharacter("Grace")', firstAndLastCharacter('Grace'), 'Ge', hint);
});

test('firstAndLastCharacter of one character gives it twice', () => {
  check('firstAndLastCharacter("x")', firstAndLastCharacter('x'), 'xx',
    'The first character and the last character are the same one here.');
});

test('snakecase lowercases and swaps a space for an underscore', () => {
  check('snakecase("JavaScript Rules!")', snakecase('JavaScript Rules!'), 'javascript_rules!',
    'Two steps: toLowerCase(), then replaceAll(" ", "_"). You can chain them: text.toLowerCase().replaceAll(...)');
});

test('snakecase replaces every space, not only the first', () => {
  check('snakecase("Dungeon of the Lost")', snakecase('Dungeon of the Lost'), 'dungeon_of_the_lost',
    'replace() swaps only the first match; replaceAll() swaps every one.');
});

test('snakecase leaves text with no spaces lowercased', () => {
  check('snakecase("HELLO")', snakecase('HELLO'), 'hello', 'Every letter should be lowercase.');
});
