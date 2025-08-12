import { build } from 'esbuild';

await build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  target: ['es2020'],
  sourcemap: true,
  minify: true,
  jsx: 'automatic',
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
  external: ['react', 'react-dom'],
});
