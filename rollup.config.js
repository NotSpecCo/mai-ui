import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: [
    // './src/index.ts',
    './src/components/index.ts',
    './src/components/appbar/index.ts',
    './src/components/buttons/index.ts',
    './src/components/form/index.ts',
    './src/components/grid/index.ts',
    './src/components/list/index.ts',
    './src/components/tiles/index.ts',
    './src/components/view/index.ts',
    './src/contexts/index.ts',
    './src/enums/index.ts',
    './src/hooks/index.ts',
    './src/models/index.ts',
    './src/utils/index.ts',
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), postcss()],
};
