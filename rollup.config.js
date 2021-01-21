import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/main.js",
  output: {
    file: "./build/bundle.min.js",
    format: "umd",
    name: "bundle",
  },
  plugins: [
    babel({ exclude: "node_modules/**" }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
