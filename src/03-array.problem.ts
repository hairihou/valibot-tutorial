/**
 * Exercise 03: array - 配列のパース
 *
 * 問題:
 * Star Wars APIから取得した人物のリストをパースする必要があります。
 * StarWarsPeopleResultsスキーマを定義して、resultsプロパティに
 * StarWarsPerson配列を持つオブジェクトを検証してください。
 *
 * ヒント:
 * - v.array()を使って配列のスキーマを定義します
 * - v.array(StarWarsPerson)のように既存のスキーマを渡せます
 */

// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const StarWarsPerson = v.object({
  name: v.string(),
});

const StarWarsPeopleResults = v.unknown();
//                            ^ 🕵️‍♂️

export const fetchStarWarsPeople = async () => {
  const data = await fetch('https://swapi.py4e.com/api/people').then((res) => res.json());

  const parsedData = v.parse(StarWarsPeopleResults, data);

  return parsedData.results;
};

// TESTS

it('Should return the name', async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: 'Luke Skywalker',
  });
});
