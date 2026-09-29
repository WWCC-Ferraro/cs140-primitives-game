// Part 1 — not, and, or
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from 'node:util';
import { not, and, or } from '../src/booleans.js';

const show = (v) => inspect(v);

function check(call, got, expected, hint) {
  assert.equal(got, expected, `${call} should be ${show(expected)}, but it gave ${show(got)}. ${hint}`);
}

test('not flips true and false', () => {
  const hint = '! gives the opposite boolean. See "Comparing and combining".';
  check('not(true)', not(true), false, hint);
  check('not(false)', not(false), true, hint);
});

test('and is true only when both are true', () => {
  const hint = '&& is true only when both sides are true. See "Comparing and combining".';
  check('and(true, true)', and(true, true), true, hint);
  check('and(true, false)', and(true, false), false, hint);
  check('and(false, true)', and(false, true), false, hint);
});

test('and(false, false) is false — both being the same is not enough', () => {
  check('and(false, false)', and(false, false), false,
    'Both are false, so they match — but && asks whether both are TRUE, not whether they are equal.');
});

test('or is false only when both are false', () => {
  const hint = '|| is true when either side is true. See "Comparing and combining".';
  check('or(false, false)', or(false, false), false, hint);
  check('or(true, false)', or(true, false), true, hint);
  check('or(false, true)', or(false, true), true, hint);
  check('or(true, true)', or(true, true), true, hint);
});
