/**
 * Exercise 12: variant - 判別可能なユニオン
 *
 * 解答:
 * v.variant()を使うことで、判別キーを持つユニオン型を効率的に定義できます。
 * 判別キーによって、TypeScriptが自動的に型を絞り込むことができます。
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const Action = v.variant('type', [
  v.object({
    type: v.literal('add'),
    payload: v.object({
      value: v.number(),
    }),
  }),
  v.object({
    type: v.literal('remove'),
    payload: v.object({
      id: v.string(),
    }),
  }),
  v.object({
    type: v.literal('update'),
    payload: v.object({
      id: v.string(),
      value: v.number(),
    }),
  }),
]);

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
