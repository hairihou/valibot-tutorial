// CODE

import * as v from 'valibot';

const StarWarsPerson = v.object({
  name: v.string(),
});

const StarWarsPeopleResults = v.object({
  results: v.array(StarWarsPerson),
});

type StarWarsPeopleResultsType = v.InferOutput<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: StarWarsPeopleResultsType) => {
  data.results.map((person) => {
    console.log(person.name);
  });
};
