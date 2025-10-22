# Valibot Tutorial

## セットアップ

```sh
# 依存関係のインストール
npm install
```

## チュートリアルの進め方

このコースは13個のエクササイズに分かれています。各エクササイズには`*.problem`ファイルと`*.solution`ファイルがあります。

### エクササイズの取り組み方

1. `src/`ディレクトリ内の`*.problem.ts`ファイルを開く
2. 🕵️‍♂️マークがついているコードを見つける
3. [Valibotのドキュメント](https://valibot.dev/)を参照して解決方法を探す
4. コードを修正する
5. テストを実行して確認する

このコースは**能動的な学習**を推奨しています。問題を見つけたら、まず自分で解決方法を探してみてください。

### テストの実行方法

```sh
# すべてのsolutionファイルをテスト
npm run test:all

# 特定のエクササイズのproblemファイルをテスト
npm run e-01  # Exercise 01のproblemをテスト

# 特定のエクササイズのsolutionファイルをテスト（答え合わせ用）
npm run s-01  # Exercise 01のsolutionをテスト

# 型チェックを実行
npx tsc

# その他の便利なコマンド
npm test           # すべてのテストを実行
npx vitest run     # 上記と同じ
```

**利用可能なスクリプト：**

- `npm run e-01` 〜 `npm run e-13` - 各エクササイズのproblemファイルをテスト
- `npm run s-01` 〜 `npm run s-13` - 各エクササイズのsolutionファイルをテスト
- `npm run test:all` - すべてのsolutionファイルをテスト

テストが成功すれば、正しく実装できています！

**解決できた場合**、または**行き詰まった場合**は、`*.solution`ファイルを確認して、あなたの解決方法と比較してみましょう。
solutionファイルのテストを実行することで、正しい実装を確認することもできます。

## エクササイズ一覧

1. **number** - 数値のパース
2. **object** - オブジェクトのパース
3. **array** - 配列のパース
4. **infer** - 型推論
5. **optional** - オプショナルなプロパティ
6. **default** - デフォルト値
7. **union** - ユニオン型とpicklist
8. **validations** - バリデーション（minLength, maxLength, email, url）
9. **composing-objects** - オブジェクトの合成
10. **transform** - データの変換
11. **enum** - Object Literalを使ったEnum
12. **variant** - 判別可能なユニオン（discriminated union）
13. **number-validations** - 数値の高度なバリデーション（decimal, digits, multipleOf）

## License

This project is based on Zod Tutorial by Matt Pocock  
Original project: [Zod Tutorial](https://github.com/total-typescript/zod-tutorial)  
Licensed under the MIT License

## Acknowledgements

オリジナルのZod Tutorialを作成したMatt Pocockに感謝します。
[Twitter](https://twitter.com/mattpocockuk)でフォローするか、[Discord](https://discord.gg/8S5ujhfTB3)に参加してください。
また、[Total TypeScript course](https://totaltypescript.com)への登録もご検討ください。
