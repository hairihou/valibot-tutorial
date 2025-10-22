/**
 * Exercise 11: enum - Enumの使用
 *
 * 問題:
 * UserRoleをv.enum()を使って定義してください。
 * Object Literalで定義されたRoleを使い、"admin"、"user"、"guest"の
 * いずれかの値のみを受け入れるようにします。
 *
 * ヒント:
 * - まずas constを使ってObject Literalを定義します
 * - v.enum(ObjectLiteral)でEnumスキーマを作成できます
 * - Object.values()を使う必要はありません
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Role = {
  Admin: 'admin',
  User: 'user',
  Guest: 'guest',
} as const;

const UserRole = v.string();
//               ^ 🕵️‍♂️

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
