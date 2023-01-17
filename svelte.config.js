import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess'; // used to compute the style
import atImport from 'postcss-import'; // used to search the style on directory

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@': path.resolve(path.resolve(), './src')
		}
	},
	preprocess: preprocess({
		postcss: {
			plugins: [
				atImport({
					root: process.cwd(),
					path: [path.join(process.cwd(), 'node_modules'), path.join(process.cwd(), 'src')] // search by default on node_modules, after dans src.
				})
			]
		}
	}),
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-unused-selector') {
			return;
		}

		handler(warning);
	}
};

export default config;
