/**
 * Exercise 11: enum - Enumの使用
 *
 * 解答:
 * v.enum()にObject Literalを渡すことで、その値の型を持つEnumスキーマを作成できます。
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Role = {
  Admin: 'admin',
  User: 'user',
  Guest: 'guest',
} as const;

const UserRole = v.enum(Role);

export const validateUserRole = (role: unknown) => {
  const parsedRole = v.parse(UserRole, role);
  return parsedRole;
};

// TESTS

it('Should accept valid roles', () => {
  expect(validateUserRole('admin')).toBe('admin');
  expect(validateUserRole('user')).toBe('user');
  expect(validateUserRole('guest')).toBe('guest');
});

it('Should reject invalid roles', () => {
  expect(() => validateUserRole('superadmin')).toThrowError();
  expect(() => validateUserRole('moderator')).toThrowError();
});

it('Should have correct type inference', () => {
  const role = validateUserRole('admin');
  type test = Expect<Equal<typeof role, 'admin' | 'user' | 'guest'>>;
});

type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
