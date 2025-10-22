/**
 * Exercise 12: variant - 判別可能なユニオン
 *
 * 問題:
 * Actionスキーマをv.variant()を使って定義してください。
 * typeフィールドで判別できるユニオン型を作成し、以下の3つのアクションを定義します：
 * - type: "add", payload: { value: number }
 * - type: "remove", payload: { id: string }
 * - type: "update", payload: { id: string, value: number }
 *
 * ヒント:
 * - v.variant('key', [オブジェクトの配列])で判別可能なユニオンを作成します
 * - 最初の引数は判別に使うキー（この場合は'type'）
 * - 各オブジェクトはv.object()で定義し、判別キーにはv.literal()を使います
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Action = v.unknown();
//             ^ 🕵️‍♂️

export const handleAction = (action: unknown) => {
  const parsedAction = v.parse(Action, action);

  switch (parsedAction.type) {
    case 'add':
      return `Adding value: ${parsedAction.payload.value}`;
    case 'remove':
      return `Removing id: ${parsedAction.payload.id}`;
    case 'update':
      return `Updating id: ${parsedAction.payload.id} with value: ${parsedAction.payload.value}`;
  }
};

// TESTS

it('Should handle add action', () => {
  const result = handleAction({
    type: 'add',
    payload: { value: 42 },
  });
  expect(result).toBe('Adding value: 42');
});

it('Should handle remove action', () => {
  const result = handleAction({
    type: 'remove',
    payload: { id: 'abc123' },
  });
  expect(result).toBe('Removing id: abc123');
});

it('Should handle update action', () => {
  const result = handleAction({
    type: 'update',
    payload: { id: 'xyz789', value: 100 },
  });
  expect(result).toBe('Updating id: xyz789 with value: 100');
});

it('Should reject invalid action types', () => {
  expect(() =>
    handleAction({
      type: 'delete',
      payload: { id: 'test' },
    })
  ).toThrowError();
});

it('Should reject missing payload', () => {
  expect(() =>
    handleAction({
      type: 'add',
    })
  ).toThrowError();
});
