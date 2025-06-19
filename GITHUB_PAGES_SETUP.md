# GitHub Pages 公開手順

## 前提条件

- GitHubアカウントを持っていること
- Gitがインストールされていること

## 手順

### 1. GitHubリポジトリの作成

1. [GitHub](https://github.com) にログイン
2. 右上の「+」ボタンから「New repository」を選択
3. リポジトリ名を `miyakojima-resort-website` に設定
4. 「Public」を選択（GitHub Pagesは無料プランではPublicリポジトリのみ）
5. 「Create repository」をクリック

### 2. ローカルプロジェクトをGitHubにプッシュ

準備済みのプロジェクトフォルダ `/home/ubuntu/miyakojima-resort-website` を使用します。

```bash
# プロジェクトディレクトリに移動
cd /home/ubuntu/miyakojima-resort-website

# Gitリポジトリを初期化
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: 宮古島リゾートWebサイト"

# GitHubリポジトリをリモートに追加（YOUR_USERNAMEを実際のユーザー名に変更）
git remote add origin https://github.com/[YOUR_USERNAME]/miyakojima-resort-website.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesの設定

1. GitHubのリポジトリページに移動
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. 「Source」で「GitHub Actions」を選択

### 4. GitHub Actions ワークフローの設定

リポジトリに以下のファイルを作成します：

`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 5. package.jsonの更新

`package.json` の `homepage` フィールドを実際のユーザー名に更新：

```json
"homepage": "https://[YOUR_USERNAME].github.io/miyakojima-resort-website"
```

### 6. デプロイの実行

```bash
# 変更をコミット
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main
```

### 7. 公開確認

1. GitHubのリポジトリページで「Actions」タブを確認
2. ワークフローが正常に完了したら、以下のURLでサイトにアクセス：
   `https://[YOUR_USERNAME].github.io/miyakojima-resort-website/`

## 注意事項

- 初回デプロイには数分かかる場合があります
- 変更をプッシュするたびに自動的にサイトが更新されます
- GitHub Pagesは無料プランではPublicリポジトリのみ利用可能です

## トラブルシューティング

### サイトが表示されない場合

1. GitHub Pagesの設定を確認
2. Actions タブでワークフローのエラーを確認
3. `vite.config.ts` の `base` パスが正しいか確認

### 画像が表示されない場合

- 画像ファイルが `public/images/` フォルダに正しく配置されているか確認
- ビルド後の `dist/images/` フォルダに画像が含まれているか確認

## 更新方法

サイトを更新する場合：

```bash
# 変更を加えた後
git add .
git commit -m "更新内容の説明"
git push origin main
```

自動的にGitHub Actionsが実行され、サイトが更新されます。

