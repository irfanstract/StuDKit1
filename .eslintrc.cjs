


// @ts-check




// import {
//   util,
// } from 'typexpe-commons/src/common_sv.mjs';

// import {
//   random,
// } from "lodash-es" ;








/** @type {import("eslint").ESLint.ConfigData } */
module.exports = {
  
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "plugins": [
    // "eslint-plugin-local-rules",
    "eslint-plugin-import",
  ],
  "root": true,
  "parser": "@typescript-eslint/parser",
  // "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2022
    ,
    "sourceType": "module"
    ,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  "rules": {
    "import/no-cycle": [
      "error"
    ],
    // "linebreak-style": [
    //   "warn",
    //   "unix"
    // ],
    "semi": [
      "error",
      "always"
    ],
    "no-extra-semi": [
      "off",
    ],
    // "local-rules/import-extensions": 2,
    "import/unused": [
      "off",
    ],
    "array-callback-return": "error" ,
    "getter-return": "error" ,
    "no-constructor-return": "warn" ,
    "no-unsafe-finally": "warn" ,
    // "no-unreachable": "warn" , /* already handled by the editor's TS/JS checking/highlighting */
    "no-case-declarations": "warn" ,
    "require-yield": "error" ,
    "no-param-reassign": "error" ,
    "no-loop-func": "warn" ,
    // "no-magic-numbers": "warn" , /* made false positives */
    "no-plusplus": "warn" ,
    "curly": "warn" ,
    "default-case": "warn" ,
    "default-case-last": "error" ,
    "no-misleading-character-class": "error" ,
    // "no-loss-of-precision": "warn" , /* already handled by the editor's TS/JS checking/highlighting */
  },
  
  "overrides": [
    /**
     * effectively disabling ESLint for now.
     */
    { "files": [], },

    // /**
    //  * By default, the ESLint CLI only looks at .js files. But, it will also look at
    //  * any files which are referenced in an override config. Most users of typescript-eslint
    //  * get this behavior by default by extending a recommended typescript-eslint config, which
    //  * just so happens to override some core ESLint rules. We don't extend from any config, so
    //  * explicitly reference TS files here so the CLI picks them up.
    //  *
    //  * ESLint in VS Code might lint any opened file (so long as it's not eslintignore'd), in which case
    //  * that will work regardless of the below.
    //  * 
    //  * The same applies to mjs files; ESLint appears to not scan those either.
    //  * 
    //  */
    // { "files": ["*.ts", "*.mts", "*.cts", "*.mjs", "*.cjs"] },
    // {
    //     "files": ["*.mjs", "*.mts"],
    //     "rules": {
    //         // These globals don't exist outside of CJS files.
    //         "no-restricted-globals": [
    //             "error",
    //             { "name": "__filename" },
    //             { "name": "__dirname" },
    //             { "name": "require" },
    //             { "name": "module" },
    //             { "name": "exports" }
    //         ]
    //     }
    // },
  ],
} ;


