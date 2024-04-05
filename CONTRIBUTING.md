









# CONTRIBUTING For This Project




## `packages`

all deliverable packages go to `packages`.

### the package `studk-demos` nested in `packages`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.

it builds on Next(JS). all source-codes were TS.

### StuDK deliverables nested in `packages`

except as otherwise noted
all source-code were Type-Checked JS.

prefer `.mjs` ext(s); see "Coding Conventions" below.

### the package `typexpe-commons` nested in `packages`

this one package was pulled here from onea my other codebase. in future this pkg may get externalised away from this monorepo.




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

#### avoid presets like `eslint:recommended`; instead, enable items individually!

__`eslint:recommended`
tries to get rid of a large number of common, safe constructs;
adherence to that preset would require even worse constructs
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
+   // "getter-return": "error" , /* unnecessary for now; typechecker already takes care of this */
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

JavaScript, as does Python,
is not
Java, Kotlin, Scala nor Rust,
all which each *makes overriding/conformance take declared parameter-types into account*, and
accordingly resolve overloads statically based on the actual arguments' static types ;
JavaScript doesn't consider signatures when mindmapping and resolving methods,
thus preventing Java-style overlading, instead treating all methods as `(...Object) => Object`.

the first alternative is to give em different names:

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

however, sometimes it's not applicable since the author intended them the same name (ie superclass version of the named method only support two signature(s), while subclass is more general and support 6 different sig(s)), so what abt alternative tweaks like parameter-reordering like this instead?

```diff
  interface DispatchService
  {
+   /* reordered the parameters */
    schedule
        (callbk: NoArgCallback ) ;
+   schedule
+       (callbk: NoArgCallback, tMillis ?: number, cancelPt ?: AbortSignal,) ;
    schedule
-       (tMillis: number, cb: NoArgCallback ) ;
+       (cb: NoArgCallback, tMillis: number, ) ;
    schedule
-       (s: AbortSignal, tMillis: number, cb: NoArgCallback ) ;
+       (cb: NoArgCallback, tMillis: number, s: AbortSignal,) ;

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
    // Note: "react" is a CommonJS module which may not provide named export ;
    // CommonJS modules can always be imported using `import * as React from "react"`, and
    // use `const { Context, } = React ` ;
    ```
    then u tried to do what the diagnostic suggested u to:
    ```javascript
    import * as React from "react" ;
    const { Context, } = React  ;
    ```
    but u can't always do this since this as u'll lose the `type`s:
    ```typescript
    import * as React from "react" ;
    const { Context, } = React ;
    const c : Context<MyAppConfig> = ... ;
    //       ^^^^^^
    //      [Error] Type Error: 'Context' being used as type here, yet refers to value
    ```
    the only way to resolve these,
    is to *switch to ESM, and revert your "import" back to the original syntax `import { Context, } from ... ;`*.

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










