/**
 * Exercise 13: number-validations - 数値の高度なバリデーション
 *
 * 問題:
 * 以下の3つのスキーマを定義してください：
 * 1. DecimalString: 小数点を含む数値文字列（例: "123.45", "-0.5"）
 * 2. DigitsString: 数字のみの文字列（例: "12345", "00123"）
 * 3. MultipleOfFive: 5の倍数である数値
 *
 * ヒント:
 * - v.pipe(v.string(), v.decimal())で小数点を含む数値文字列を検証
 * - v.pipe(v.string(), v.digits())で数字のみの文字列を検証
 * - v.pipe(v.number(), v.multipleOf(5))で5の倍数を検証
 */

// CODE

import { describe, expect, it } from 'vitest';
import * as v from 'valibot';

const DecimalString = v.string();
//                    ^ 🕵️‍♂️

const DigitsString = v.string();
//                   ^ 🕵️‍♂️

const MultipleOfFive = v.number();
//                     ^ 🕵️‍♂️

export const validateDecimal = (value: unknown) => {
  return v.parse(DecimalString, value);
};

export const validateDigits = (value: unknown) => {
  return v.parse(DigitsString, value);
};

export const validateMultiple = (value: unknown) => {
  return v.parse(MultipleOfFive, value);
};

// TESTS

describe('DecimalString', () => {
  it('Should accept valid decimal strings', () => {
    expect(validateDecimal('123.45')).toBe('123.45');
    expect(validateDecimal('-0.5')).toBe('-0.5');
    expect(validateDecimal('0.0')).toBe('0.0');
  });

  it('Should reject invalid decimal strings', () => {
    expect(() => validateDecimal('abc')).toThrowError();
    expect(() => validateDecimal('12.34.56')).toThrowError();
  });
});

describe('DigitsString', () => {
  it('Should accept strings with only digits', () => {
    expect(validateDigits('12345')).toBe('12345');
    expect(validateDigits('00123')).toBe('00123');
    expect(validateDigits('0')).toBe('0');
  });

  it('Should reject strings with non-digit characters', () => {
    expect(() => validateDigits('123a45')).toThrowError();
    expect(() => validateDigits('12.34')).toThrowError();
    expect(() => validateDigits('-123')).toThrowError();
  });
});

describe('MultipleOfFive', () => {
  it('Should accept multiples of 5', () => {
    expect(validateMultiple(0)).toBe(0);
    expect(validateMultiple(5)).toBe(5);
    expect(validateMultiple(15)).toBe(15);
    expect(validateMultiple(-10)).toBe(-10);
  });

  it('Should reject non-multiples of 5', () => {
    expect(() => validateMultiple(3)).toThrowError();
    expect(() => validateMultiple(7)).toThrowError();
    expect(() => validateMultiple(12)).toThrowError();
  });
});
