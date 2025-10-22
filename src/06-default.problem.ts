/**
 * Exercise 06: default - デフォルト値
 *
 * 問題:
 * keywordsプロパティが渡されない場合、空の配列[]をデフォルト値として設定してください。
 * 現在はundefinedになっていますが、常に配列が返されるようにする必要があります。
 *
 * ヒント:
 * - v.optional()の第2引数にデフォルト値を渡すことができます
 * - v.optional(v.array(v.string()), [])のように使います
 */

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
