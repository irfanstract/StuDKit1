









# CONTRIBUTING For This Project




## [`./packages`](./packages/)

all deliverable packages go to `packages`.

as you keep making contributions to the packages
be sure to keep updating the corresponding overview "packages" in [`README.md`](./README.md) including the completion checklists

except as otherwise noted
all source-code were Type-Checked JS.
this
is necessary to allow loading the packages natively in Node without needing to "manually first searching, reaching and hiting the 'build' button".
except for the React-specific stuffs since
for now they'll only be used for the apps written for Vite or Next anyway;
use `npx --yes ts-node` to run such src files.

### the packages located in [`./packages`](./packages/) and their structures

the StuDK deliverables nested in directory `packages`

#### `studk-util`

level-1 infrastructure.

#### `studk-ui`

`studk-ui`

in contrast to the general recommendation of avoiding extra 'manually click to build' step,
a subset of the source files there
will only be used for apps written for Vite or Next, so
one should use TypeScript for that ;
use `npx --yes ts-node` to run such src files.

#### `studk-demos`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.

for now
the source files
will only be used for the apps written for Vite or Next anyway, so
one should use TypeScript for that ;
use `npx --yes ts-node` to run such src files.

#### `studpresenters`

infrastructure for presentation slides.

as you keep making contribs to this package
be sure to keep the checklist in [`README.md`](./README.md) updated.

#### `studk-simulations-commons`

infrastructure for simulations.

as you keep making contribs to this package
be sure to keep the checklist in [`README.md`](./README.md) updated.

#### `studk-dom-util`

utility concerning DOM API(s).

server-side usage of this
will need installing `jsdom` etc or switching to Electron
.

#### the `studk-yyy-fwcore` packages

internal package defining the conventions across the packages there.
internal only.

#### the `typexpe-commons` packages

__do not confuse with `studk-util`.__

this one package was pulled here from onea my other codebase.
the naming of the stuffs defined there seems rather arbitrary.
in future this pkg may get externalised away from this monorepo.
because this package is anticipated to go away,
avoid making significant amount of breaking changes
unless it's to fix the naming issues.




## Package Dependencies Concerns

### the versions of the depended-on packages

things to consider
when it comes to
the versions of the depended-on packages

#### when specifying dependencies, avoid tag `latest`

when it comes to packages,
tag `latest` is volatile -
running `npm install` at different times would yield different major versions, thereby a breaking change

instead,
specify exact version together with prefix `^`,
so you get one like `^20.11.17`, etc.
(you can also omit the prefix `^`, but this will prevent automatic upgrade so it's not recommended)

suggestion:
```diff json
{
    "devDependencies": {
        "@types/chai": "^4.3.12"
        "@types/mocha": "^10.0.6",
-       "@types/node": "latest",
+       "@types/node": "^20.11.17",
-       "@types/which": "latest",
+       "@types/which": "^3.0.3",
        "hereby": "^1.8.9",
    },
    "dependencies": {
        "chai": "^4.4.1",
        "chalk": "^4.1.2",
-       "chokidar": "latest",
+       "chokidar": "^3.6.0",
-       "glob": "latest",
+       "glob": "^10.3.10",
        "jsonc-parser": "^3.2.1",
    },
}
```

#### when to use `^`, when to not

you can also omit the prefix `^`, but this will prevent automatic upgrade so it's not recommended

however,
in a small nomber of cases of strict deployment constraints
exact pinning of versions (by omitting the prefix `^`)
may be necessary

### installing dependencies via `npm install <packages>` will *naively reformat `package.json` in Git-unfriendly way*; instead, add into [`package.json`](./package.json) first and then run `npm install`

installing dependencies via `npm install <packages>`
will [*naively reformat `package.json` in Git-unfriendly way*](https://stackoverflow.com/questions/24852116/what-exactly-is-a-merge-conflict).

```
npm install chokidar glob@10  ❌❌ don't do this
```

instead,
add into [`package.json`](./package.json) first and then run `npm install` (ie NPM `install` without arguments)
.

```diff json
{
    "devDependencies": {
+       "@esfx/canceltoken": "^1.0.0",
        "@types/chai": "^4.3.12",
        "@types/minimist": "^1.2.5",
        "@types/mocha": "^10.0.6",
        "@types/ms": "^0.7.34",
        "@types/node": "latest",
+       "@types/which": "^3.0.3",
        "hereby": "^1.8.9",
+       "esbuild": "^0.20.1"
    },
    "dependencies": {
+       "@esfx/canceltoken": "^1.0.0",
        "chai": "^4.4.1",
+       "chalk": "^4.1.2",
+       "chokidar": "^3.6.0",
+       "fast-xml-parser": "^4.3.5",
+       "glob": "^10.3.10",
        "hereby": "^1.8.9",
        "jsonc-parser": "^3.2.1",
    },
}
```

```
npm install
```




## Scripting Conventions

conventions to be adhered when scripting

except as otherwise noted
all source-code were Type-Checked JS.
this
is necessary to allow loading the packages natively in Node without needing to "manually first searching, reaching and hiting the 'build' button".

prefer `.mjs` ext(s); see "Coding Conventions" below.

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




## Routed App Conventions

for example Next(JS),
all those fws which maps client-browsed paths to pages according to the structure in `app` or `pages` tree.

### Avoid using `public` directory where possible

### avoid absolute import which involves traversal upwards (ie `../<path>`)










