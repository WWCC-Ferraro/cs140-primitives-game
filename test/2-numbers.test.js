// Part 2 — remainder, flipSign
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from 'node:util';
import { remainder, flipSign } from '../src/numbers.js';

const show = (v) => inspect(v);

function check(call, got, expected, hint) {
  assert.equal(got, expected, `${call} should be ${show(expected)}, but it gave ${show(got)}. ${hint}`);
}

test('remainder gives what is left over, not how many times it fits', () => {
  const hint = 'Not the answer to the division — what is LEFT after it. See "Arithmetic operators", the % operator.';
  check('remainder(7, 4)', remainder(7, 4), 3, hint);
  check('remainder(5, 3)', remainder(5, 3), 2, hint);
  check('remainder(10, 3)', remainder(10, 3), 1, hint);
});

test('remainder is 0 when it divides exactly', () => {
  check('remainder(8, 2)', remainder(8, 2), 0, '2 fits into 8 exactly, so nothing is left over.');
});

test('remainder when the number is smaller than the divisor', () => {
  check('remainder(2, 3)', remainder(2, 3), 2, '3 does not fit into 2 at all, so all of the 2 is left over.');
});

test('flipSign turns a positive number negative', () => {
  check('flipSign(5)', flipSign(5), -5, 'A minus sign in front of a value flips its sign.');
  check('flipSign(12)', flipSign(12), -12, 'A minus sign in front of a value flips its sign.');
});

test('flipSign turns a negative number positive', () => {
  check('flipSign(-5)', flipSign(-5), 5,
    'Flipping works both ways: a negative number becomes positive. Your answer may always be making it negative.');
});
