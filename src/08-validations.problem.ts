// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Form = v.object({
  name: v.string(),
  //             ^ 🕵️‍♂️
  phoneNumber: v.optional(v.string()),
  //                    ^ 🕵️‍♂️
  email: v.string(),
  //              ^ 🕵️‍♂️
  website: v.optional(v.string()),
  //                ^ 🕵️‍♂️
});

export const validateFormInput = (values: unknown) => {
  const parsedData = v.parse(Form, values);

  return parsedData;
};

// TESTS

it('Should fail if you pass a phone number with too few characters', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
      email: 'matt@example.com',
      phoneNumber: '1',
    })
  ).toThrowError('Invalid length');
});

it('Should fail if you pass a phone number with too many characters', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
      email: 'matt@example.com',
      phoneNumber: '1238712387612387612837612873612387162387',
    })
  ).toThrowError('Invalid length');
});

it('Should throw when you pass an invalid email', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
      email: 'matt',
    })
  ).toThrowError('Invalid email');
});

it('Should throw when you pass an invalid website URL', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
      email: 'matt@example.com',
      website: '/',
    })
  ).toThrowError('Invalid URL');
});

it('Should pass when you pass a valid website URL', async () => {
  expect(() =>
    validateFormInput({
      name: 'Matt',
      email: 'matt@example.com',
      website: 'https://mattpocock.com',
    })
  ).not.toThrowError();
});
