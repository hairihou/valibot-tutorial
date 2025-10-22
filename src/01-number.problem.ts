// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';
//       ^ 🕵️‍♂️

export const toString = (num: unknown) => {
  return String(num);
};

// TESTS

it('Should throw a runtime error when called with not a number', () => {
  expect(() => toString('123')).toThrowError('Invalid type: Expected number but received');
});

it('Should return a string when called with a number', () => {
  expect(toString(1)).toBeTypeOf('string');
});
