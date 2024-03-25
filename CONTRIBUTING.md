









# CONTRIBUTING For This Project




## Coding Conventions

### indentations should be 2 spaces (char `0x20`, *SPACE*)

...and __avoid using <code>Tab</code>s__

### avoid using plain `.js` ext for JS files ; use `.cjs` or `.mjs`

__avoid using plain `.js` ext for JS files ; use `.cjs` or `.mjs`__

avoid using plain `.js` ext for JS files,
usually `import`s will be rejected in plain `.js`es, so
needs to rewrite (in)to `.cjs` or `.mjs`
(maybe not that much of an issue if they were (the needing extra compile-step, type-ascription-heavy superset ) TS instead )

__when using TypeScript, prefer explicit ext `.cts` or `.mts`, for exactly the same reason__

when using TypeScript, prefer explicit ext `.cts` or `.mts`, for the same reason ;
under *emit* `.mts` would become `.mjs`, `.cts` would become `.cjs`, while
plain `.ts` would become plain `.js`

### the need of `paths` in `tsconfig.json`

the need of `paths` in `tsconfig.json` is metioned in:

-  https://stackoverflow.com/a/57273280

-  *the tickets linked to* ticket at https://github.com/microsoft/TypeScript/pull/56946 .


### consider using labels in control-flow

#### `break` and `continue` should always be labelled

```diff
+LOOP :
 for (const segmt of segments )
 {
   if (isG2DClosePathCmd(segmt) )
-  { break ; }
+  { break LOOP ; }
 }
```

an example involving a pitfall (guess where!):

```diff
+ LOOP:
  for (const { kind, dest, } of instructions )
  {
    /* if kind is "EOF", break the loop  */
    switch (kind) {
      case "EOF" :
-       break ;
+       break LOOP ;
      default:
-       continue ;
+       continue LOOP ;
    }
  }
```

### Usage Of ESLint In This Project

#### The ESLint Rules For This Project

see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)

#### use `.eslintrc.cjs`, avoid `.eslintrc.json`

(note: ESLint doesn't yet support `.mjs` ext!)

##### issues with JSON

JSON Specification disallows trailing comma, but
omission of trailing comma doesn't play well Git
(eg unexpected auto-merge corrupting your JSON files)

```javascript
{
  "imports": {
    // from current branch
    "dest": "${project}/dist"
    // from merged branch
    "pipelining": true
//  ^^^^^^^ [Syntax Error] Unexpected Identifier; Expected Comma Or Closing Brace
  } ,
}
```

JSONC and regular JS/TS would avoid the above problem:

```javascript
module.exports = {
    // from current branch
    "dest": "${project}/dist" , // we can freely use trailing comma here, avoiding the above issues
    // from merged branch
    "pipelining": true , // we can freely use trailing comma here, avoiding the above issues
} ;
```

#### DO NOT use `eslint:recommended`!

__`eslint:recommended`
tries to get rid of a large number of common, safe constructs,
whose avoiding would require even worse constructs
(eg forced to resort to more bug-prone, implicit label-less `break`s)!__
__avoid enabling the whole set__ ;
instead,
*individually* enable the items, like this:

```diff
- "extends": "eslint:recommended",
  "rules": {
+   "import/no-cycle": [
+     "error"
+   ],
+   "semi": [
+     "error",
+     "always"
+   ],
+   "array-callback-return": "error" ,
+   "getter-return": "error" ,
+   "no-constructor-return": "warn" ,
+   "no-unsafe-finally": "warn" ,
+   "no-case-declarations": "warn" ,
+   "require-yield": "error" ,
+   "no-param-reassign": "error" ,
+   "no-loop-func": "warn" ,
+   "no-plusplus": "warn" ,
+   "curly": "warn" ,
+   "default-case": "warn" ,
+   "default-case-last": "error" ,
+   "no-misleading-character-class": "error" ,
  },
```

### avoid *non-trivial overloading and run-time checks*, if possible

#### avoid `typeof x === "object"`
```javascript
/** @type {number | number[] | null } */ const xArg ;

if (typeof xArg === "object") {
  /*
   * `null` is very special unlike `undefined`, `boolean`s and `string`s as
   * `typeof`ing it will yield `"object"` !
   * 
   */
}

```

#### avoid potential pit-falls in null-checking of `number`
```javascript
({ height: heightArg, }) => {
  ;
  
  /* avoid these */
  if (!heightArg) { heightArg = 32 ; } /* wrong!! not only `undefined` and `null`; `0` would too coerce to `false` */
  
  /* OK */
  if (!(typeof heightArg === "number" )) { heightArg = 32 ; }

  ;
}

```

#### avoid non-trivial overloading if possible

```diff
  interface DispatchService
  {
+   /* avoid overloading; give these each its own name */
-   schedule
+   scheduleImmediately
        (cb: NoArgCallback ) ;
-   schedule
+   scheduleAfterMillis
        (tMillis: number, cb: NoArgCallback ) ;
-   schedule
+   scheduleCancellableAfterMillis
        (s: AbortSignal, tMillis: number, cb: NoArgCallback ) ;

  }

```

### avoid using CommonJS ; stick to ESM

avoid using CommonJS ;
stick to ESM, to avoid the following issues:
- `module "xyz" does not provide named export 'foo'`
    ```javascript
    import { Context, } from "react" ;
    // ^^^^^
    // [Error] Import Error:
    // module "react" does not provide named export 'Context' ;
    // CommonJS modules can always be imported using `import * as React from "react"`, and
    // use `const { Context, } = React ` ;
    ```
    but u can't always do this since this as u'll lose the `type`s:
    ```typescript
    import * as React from "react" ;
    const { Context, } = React ;
    const c : Context<MyAppConfig> = ... ;
    //       ^^^^^^
    //      [Error] Type Error: 'Context' being used as type here, yet refers to value
    ```
-  `ERR_REQUIRE_ESM`

### what to consider when defining and exporting `type`s

#### `'type Bar' cannot be exported under --isolatedModules`

you'll get `'type Bar' cannot be exported under --isolatedModules`:
```typescript
type PropsRequired<T> = Required<React.PropsOf<T> > ;
export { PropsRequired, } ;
//       ^^^^^^
//      [E1205] Type Error: exporting type PropsRequired' requires kwd 'type' under --isolatedModules
```

add `namespace Bar { /* must have at-least a semicolon! */ ; } `:
```diff
  type PropsRequired<T> = Required<React.PropsOf<T> > ;
+ namespace PropsRequired { /* must have at-least a semicolon!! */ ; }
  export { PropsRequired, } ;
```

#### `@typedef` name omission when accompanying an `export const Bar = ... ... ;`

when accompanying an `export const Bar = ... ... ;`,
name duplication on `@typedef` could be omitted ;
see `jsdocTreatAsExported` in `binder.ts` on https://github.com/microsoft/TypeScript/blob/0a671aa393760957743e9081c1798d5acc23b2c7/src/compiler/binder.ts#L940

https://github.com/Microsoft/TypeScript/tree/0a671aa393760957743e9081c1798d5acc23b2c7

### Relevant Considerations Affecting TypeScript And Type-Checked JavaScript

some ESLint rules are enforced here -
see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)

relevant open issues with `tsc`:

- Merging, Occurences, Highlighting, of same-named decl(s):
  - https://github.com/microsoft/TypeScript/issues/36626  (missing *merging* for between same-named `const =` and `type =` )
- Dependent-Typing, Type-Guard(s), Aliased Boolean Expr(s) :
  - https://github.com/microsoft/TypeScript/issues/17588 (missing support for Scala-style inner-class(es) ) 
  - https://github.com/microsoft/TypeScript/issues/27808 (missing support for `extends oneof`) 
  - https://github.com/microsoft/TypeScript/pull/47190 (CFA/narrowing involving destructured property from -   discriminant-union-typed structs )
  - https://github.com/microsoft/TypeScript/pull/44730 (transparency, of boolean expr aliases (ie `const` without type-ascription ) )
  - https://github.com/microsoft/TypeScript/pull/57465 (missing inferring of `x is T` signatures )










