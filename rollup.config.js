import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";
import minimist from "minimist";
import { terser } from 'rollup-plugin-terser'

const argv = minimist(process.argv.slice(2));

const config = {
    input: "src/index.js",
    output: {
        name: "bqrosterUtils",
        exports: "named"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        commonjs(),
        buble(),
        terser()
    ]
};

// minify browser
if (argv.format === "iife") {
    config.plugins.push(uglify());
}

export default config;