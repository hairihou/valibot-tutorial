/**
 * Exercise 09: composing-objects - オブジェクトの合成
 *
 * 問題:
 * 以下のコードにはidプロパティの定義が重複しています。
 * この重複を削除し、コードをリファクタリングしてください。
 * ただし、型テストが失敗しないようにする必要があります。
 *
 * ヒント:
 * - 共通のidを持つベーススキーマを作成する方法
 * - スプレッド演算子を使ってエントリを展開する方法: ...BaseSchema.entries
 * 複数の解決方法があります！
 */

import * as v from 'valibot';
import type { Equal, Expect } from './helpers/type-utils';

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */

const User = v.object({
  id: v.pipe(v.string(), v.uuid()),
  name: v.string(),
});

const Post = v.object({
  id: v.pipe(v.string(), v.uuid()),
  title: v.string(),
  body: v.string(),
});

const Comment = v.object({
  id: v.pipe(v.string(), v.uuid()),
  text: v.string(),
});

type cases = [
  Expect<Equal<v.InferOutput<typeof Comment>, { id: string; text: string }>>,
  Expect<Equal<v.InferOutput<typeof Post>, { id: string; title: string; body: string }>>,
  Expect<Equal<v.InferOutput<typeof User>, { id: string; name: string }>>,
];
