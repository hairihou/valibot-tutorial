import * as v from 'valibot';
import type { Equal, Expect } from './helpers/type-utils';

const Id = v.pipe(v.string(), v.uuid());

const User = v.object({
  id: Id,
  name: v.string(),
});

const Post = v.object({
  id: Id,
  title: v.string(),
  body: v.string(),
});

const Comment = v.object({
  id: Id,
  text: v.string(),
});

type cases = [
  Expect<Equal<v.InferOutput<typeof Comment>, { id: string; text: string }>>,
  Expect<Equal<v.InferOutput<typeof Post>, { id: string; title: string; body: string }>>,
  Expect<Equal<v.InferOutput<typeof User>, { id: string; name: string }>>,
];
