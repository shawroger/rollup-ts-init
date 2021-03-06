import resolve from 'rollup-plugin-node-resolve';
//import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';


export default {
  input: 'src/index.js',
  output: {
  	name: 'siphan',
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    resolve(),
    /*typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
    }),*/
    babel({
      exclude: 'node_modules/**'
    })
  ]
};