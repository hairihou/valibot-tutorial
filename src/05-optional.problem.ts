/**
 * Exercise 05: optional - オプショナルなプロパティ
 *
 * 問題:
 * Formスキーマで、phoneNumberを省略可能にしてください。
 * nameは必須のまま、phoneNumberは渡されても渡されなくてもエラーにならないようにします。
 *
 * ヒント:
 * - v.optional()を使ってプロパティを省略可能にします
 * - v.optional(v.string())のように使います
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Form = v.object({
  name: v.string(),
  phoneNumber: v.string(),
  //                     ^ 🕵️‍♂️
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
