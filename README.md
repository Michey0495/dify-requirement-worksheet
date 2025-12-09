# Difyカスタムワークフロー構築：要件定義ワークシート

このWebアプリケーションは、あなたの「なんとなく楽になりたい業務」を、Difyで実装可能な「システム要件」に変換するための設計図です。

## 機能

- **業務の棚卸し**: 現状の悩みと理想の状態を整理
- **システム設計**: Input → Process → Output の3ステップで設計
- **開発ステップ**: MVPから完成形までの段階的な開発計画
- **データエクスポート**: 入力内容をJSON形式でエクスポート可能

## 技術スタック

- **Next.js 14**: Reactフレームワーク
- **TypeScript**: 型安全性の確保
- **Tailwind CSS**: スタイリング
- **Vercel**: デプロイメント

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## Vercelへのデプロイ

1. [Vercel](https://vercel.com)にアカウントを作成
2. GitHubリポジトリにプッシュ
3. Vercelダッシュボードから「New Project」を選択
4. リポジトリをインポート
5. デプロイ設定は自動検出されます

または、Vercel CLIを使用:

```bash
npm i -g vercel
vercel
```

## フォント

このアプリケーションは以下のフォントを使用しています:

- Hiragino Kaku Gothic ProN
- Hiragino Sans
- Meiryo
- sans-serif

## ライセンス

このプロジェクトはプライベートプロジェクトです。

