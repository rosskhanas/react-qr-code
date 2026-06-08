import path from "node:path";
import { fileURLToPath } from "node:url";
import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    external: (id) => ["prop-types", "react"].includes(id) || id.startsWith("qr.js"),
    input: "src/index.js",
    output: {
      exports: "named",
      file: "lib/index.js",
      format: "cjs",
    },
    plugins: [babel({ babelHelpers: "bundled" }), commonjs({ include: /node_modules/ })],
  },
  {
    external: (id) => ["prop-types", "react"].includes(id) || id.startsWith("qr.js"),
    input: "src/index.js",
    output: {
      exports: "named",
      file: "lib/index.mjs",
      format: "esm",
    },
    plugins: [babel({ babelHelpers: "bundled" }), commonjs({ include: /node_modules/ })],
  },
  {
    external: (id) => ["prop-types", "react", "react-native-svg"].includes(id) || id.startsWith("qr.js"),
    input: "src/index.js",
    output: {
      exports: "named",
      file: "lib/index.native.js",
      format: "cjs",
    },
    plugins: [
      babel({ babelHelpers: "bundled" }),
      alias({
        entries: [
          { find: "./QRCodeSvg", replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/QRCodeSvg.native.js") },
        ],
      }),
    ],
  },
];
