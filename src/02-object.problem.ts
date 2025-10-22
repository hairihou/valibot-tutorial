// CODE

import { expect, it } from 'vitest';
import * as v from 'valibot';

const PersonResult = v.unknown();
//                   ^ 🕵️‍♂️

export const fetchStarWarsPersonName = async (id: string) => {
  const data = await fetch('https://www.totaltypescript.com/swapi/people/' + id + '.json').then((res) => res.json());

  const parsedData = v.parse(PersonResult, data);

  return parsedData.name;
};

// TESTS

it('Should return the name', async () => {
  expect(await fetchStarWarsPersonName('1')).toEqual('Luke Skywalker');
  expect(await fetchStarWarsPersonName('2')).toEqual('C-3PO');
});
