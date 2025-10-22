// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Form = v.object({
  name: v.string(),
  phoneNumber: v.optional(v.string()),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = v.parse(Form, values);

  return parsedData;
};

// TESTS

it('Should validate correct inputs', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
    })
  ).not.toThrow();

  expect(() =>
    validateFormInput({
      name: 'Matt',
      phoneNumber: '123',
    })
  ).not.toThrow();
});

it('Should throw when you do not include the name', async () => {
  expect(() => validateFormInput({})).toThrowError('Invalid');
});
