import { build } from 'esbuild';

await build({
  entryPoints: ['src/Toast.tsx'],
  outfile: 'dist/index.js',
  external: ['react', 'react-dom'], 
  bundle: true,
  format: 'esm',
  target: ['es2020'],
  sourcemap: true,
  minify: true,
  jsx: 'automatic',
  loader: { '.tsx': 'tsx' },
});

