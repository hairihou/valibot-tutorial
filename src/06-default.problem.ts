// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Form = v.object({
  repoName: v.string(),
  keywords: v.optional(v.array(v.string())),
  //                           ^ 🕵️‍♂️
});

export const validateFormInput = (values: unknown) => {
  const parsedData = v.parse(Form, values);

  return parsedData;
};

// TESTS

it('Should include keywords if passed', async () => {
  const result = validateFormInput({
    repoName: 'mattpocock',
    keywords: ['123'],
  });

  expect(result.keywords).toEqual(['123']);
});

it('Should automatically add keywords if none are passed', async () => {
  const result = validateFormInput({
    repoName: 'mattpocock',
  });

  expect(result.keywords).toEqual([]);
});
