/**
 * Exercise 10: transform - データの変換
 *
 * 問題:
 * StarWarsPerson スキーマを拡張して、nameを空白で分割したnameAsArray
 * プロパティを追加してください。
 * 例: "Luke Skywalker" → ["Luke", "Skywalker"]
 *
 * ヒント:
 * - v.pipe()とv.transform()を組み合わせて使います
 * - v.transform()にはコールバック関数を渡し、変換後のオブジェクトを返します
 * - person.name.split(" ")で名前を配列に変換できます
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const StarWarsPerson = v.object({
  name: v.string(),
});
//^ 🕵️‍♂️

const StarWarsPeopleResults = v.object({
  results: v.array(StarWarsPerson),
});

export const fetchStarWarsPeople = async () => {
  const data = await fetch('https://www.totaltypescript.com/swapi/people.json').then((res) => res.json());

  const parsedData = v.parse(StarWarsPeopleResults, data);

  return parsedData.results;
};

// TESTS

it('Should resolve the name and nameAsArray', async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: 'Luke Skywalker',
    nameAsArray: ['Luke', 'Skywalker'],
  });
});
