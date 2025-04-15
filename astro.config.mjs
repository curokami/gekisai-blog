// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],

	// ✅ ここから追記
	vite: {
		server: {
			port: 4321, // ✅ 例：ポート番号を変更
		},
		resolve: {
			alias: {
				'@components': './src/components', // ✅ 例：エイリアスを追加
			},
		},
	}
	
});