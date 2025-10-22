/**
 * Exercise 04: infer - 型推論
 *
 * 問題:
 * logStarWarsPeopleResults関数のdataパラメータの型をunknownから、
 * StarWarsPeopleResultsスキーマに基づいた型に変更してください。
 *
 * ヒント:
 * - v.InferOutput<typeof Schema>を使ってスキーマから型を推論できます
 * - 型エイリアスを作成することもできます
 */

// CODE

import * as v from 'valibot';

const StarWarsPerson = v.object({
  name: v.string(),
});

const StarWarsPeopleResults = v.object({
  results: v.array(StarWarsPerson),
});

const logStarWarsPeopleResults = (data: unknown) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
