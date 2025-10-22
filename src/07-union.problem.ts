// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Form = v.object({
  repoName: v.string(),
  privacyLevel: v.string(),
  //              ^ 🕵️‍♂️
});

export const validateFormInput = (values: unknown) => {
  const parsedData = v.parse(Form, values);

  return parsedData;
};

// TESTS

it('Should fail if an invalid privacyLevel passed', async () => {
  expect(() =>
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'something-not-allowed',
    })
  ).toThrowError();
});

it('Should permit valid privacy levels', async () => {
  expect(
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'private',
    }).privacyLevel
  ).toEqual('private');

  expect(
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'public',
    }).privacyLevel
  ).toEqual('public');
});
