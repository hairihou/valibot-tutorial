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
