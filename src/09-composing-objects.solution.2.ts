import * as v from 'valibot';
import type { Equal, Expect } from './helpers/type-utils';

const ObjectWithId = v.object({
  id: v.pipe(v.string(), v.uuid()),
});

const User = v.object({
  ...ObjectWithId.entries,
  name: v.string(),
});

const Post = v.object({
  ...ObjectWithId.entries,
  title: v.string(),
  body: v.string(),
});

const Comment = v.object({
  ...ObjectWithId.entries,
  text: v.string(),
});

type cases = [
  Expect<Equal<v.InferOutput<typeof Comment>, { id: string; text: string }>>,
  Expect<Equal<v.InferOutput<typeof Post>, { id: string; title: string; body: string }>>,
  Expect<Equal<v.InferOutput<typeof User>, { id: string; name: string }>>,
];
