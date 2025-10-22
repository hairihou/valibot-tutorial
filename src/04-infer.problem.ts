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
