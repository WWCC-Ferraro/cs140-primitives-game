// Part 4 — isNull, isUndefined, isNil
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inspect } from 'node:util';
import { isNull, isUndefined, isNil } from '../src/nothing.js';

const show = (v) => inspect(v);

function check(name, fn, value, expected, hint) {
  const got = fn(value);
  assert.equal(got, expected, `${name}(${show(value)}) should be ${show(expected)}, but it gave ${show(got)}. ${hint}`);
}

test('isNull is true for null', () => {
  check('isNull', isNull, null, true, 'Compare with === null. See "When there is nothing there".');
});

test('isNull is false for undefined — they are two different values', () => {
  check('isNull', isNull, undefined, false,
    '== treats null and undefined as equal; === does not. See "Equality: == versus ===".');
});

test('isNull is false for values that are there', () => {
  const hint = '0, "" and false are values. Only null is null.';
  for (const v of [0, '', false, 'null']) check('isNull', isNull, v, false, hint);
});

test('isUndefined is true for undefined', () => {
  check('isUndefined', isUndefined, undefined, true, 'Compare with === undefined.');
});

test('isUndefined is false for null and for values that are there', () => {
  check('isUndefined', isUndefined, null, false,
    'null was written on purpose; it is not undefined. == treats them as equal; === does not.');
  for (const v of [0, '', false]) check('isUndefined', isUndefined, v, false, '0, "" and false are values.');
});

test('isNil is true for either kind of nothing', () => {
  const hint = 'Ask both questions and combine them with ||, as in or() from part 1.';
  check('isNil', isNil, null, true, hint);
  check('isNil', isNil, undefined, true, hint);
});

test('isNil is false for 0, "" and false — they are there', () => {
  const hint = '!value is true for 0, "" and false too — it asks "is it falsy?", not "is it nothing?". ' +
    'See "When there is nothing there".';
  for (const v of [0, '', false, NaN]) check('isNil', isNil, v, false, hint);
});
