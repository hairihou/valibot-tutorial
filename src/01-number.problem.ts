/**
 * Exercise 01: number - 数値のパース
 *
 * 問題:
 * toString関数は、引数が数値でない場合にエラーを投げる必要があります。
 * Valibotを使って、引数が数値であることを検証してください。
 *
 * ヒント:
 * - Valibotのドキュメントで「number」を検索してみましょう
 * - v.parse()を使ってパースします
 */

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
