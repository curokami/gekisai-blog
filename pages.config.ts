// pages.config.ts
import { defineConfig } from 'pages-cms/config';

export default defineConfig({
  contentDir: 'src/content', // Markdown を置く場所
  collections: [
    {
      name: 'posts',
      label: 'ブログ記事',
      folder: 'src/content/posts',
      extension: 'md',
      fields: [
        { name: 'title', label: 'タイトル', type: 'text' },
        { name: 'date', label: '日付', type: 'date' },
        { name: 'description', label: '概要', type: 'text' },
      ],
    },
  ],
});
