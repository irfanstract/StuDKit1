









# CONTRIBUTING For This Project

important considerations for
CONTRIBUTING For This Project




## Getting Started Here And Troubleshooting It

Troubleshooting Unexpected Problems While Testing Or Deploying In Different Devices

### forgetting to run `npm ci`

forgetting to run `npm ci`
is one of the top reasons behind these problems
- (in editor) errors `cannot find module "bar" or corresponding @types`
- (on run-time) unexpected `ENOENT`s or `ImportError`s

note: avoid using plain `npm install`; use `npm ci`; see below

### when testing, `npm install` shall be replaced with `npm ci`

regular `npm install` (sub)cmd
will show its nondeterminism *from time to time* -
`npm install` *from clean condition* can lead to unexpected, incompatibly-behaving versions of packages.
for guaranteed stability *in testing env(s)*,
replace `npm install` with `npm ci`
.

__discussed in depth in section "when testing, `npm install` shall be replaced with `npm ci`" in "Package Dependencies Converns" below__.

### caveats with `.mts*` and `.cts*` and `.mjsx` extension(s)

__caveats with `.mts*` and `.cts*` and `.mjsx` extension(s)__

At the time of writing, NextJS doesn't support those ext(s).
avoid using those ext(s) for these days; use plain `.ts*` instead.

### app crashed with "syntax error, unexpected (.....)" or "syntax error, module parse failed, (......)"

__for example, app crashed with__
- `ERR_UNKNOWN_FILE_EXTENSION`
- "Syntax Error" complaints
  - SyntaxError(s) at Run-Time:
    - "syntax error, unexpected keyword 'type'",
    - "syntax error, unexpected token ':'",
    - "syntax error, unexpected token '!'",
    - "syntax error, unexpected keyword 'satisfies'"
  - "syntax error unexpected token, module parse failed, you may need an appropriate handler for these files", from Webpack or Turbopack

first of all, upgrade Node to version 20 (__not enough of a fix itself__ but this is a must) 😉

__replacing `node <the-file>` with <s>`npx --yes ts-node <the-file>`</s> [`node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>`](https://github.com/TypeStrong/ts-node/issues/2100)__ would likely resolve this issue.
see *replacing `node` with <s>`npx --yes ts-node`</s> `node --import ./scripts/setup-tsnodeimportfixups.mjs`* below
for the intro to that.

```diff
- node <the-file>
+ node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>
```

__in case u didn't know:__ __[`npx ts-node <main-file>` failed to properly do its thing in Node 20](https://github.com/TypeStrong/ts-node/issues/2100) so
you'll need to switch to `node --import <aux-path> <main-file>`__:

```diff
+ # see https://github.com/TypeStrong/ts-node/issues/2100
- npx --yes ts-node <the-file>
+ node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>
```

also,
at time of writing,
NextJS doesn't seem to support the ext(s) `.mts*` and `.cts*` and `.mjsx`.
avoid using those ext(s) *for the moment*;
rename those files back to "plain naive" `.ts*`, go back to the associated `package.json` and set `type` to `module`.

-
  ```diff
    ▼ main
      ▼ PrimitiveTypedInputUi
        - OneLineTxtEd.tsx
        - DatePicker.tsx
      ▼ RichTextModelling
  -     - HtmlDoc.mts
  +     - HtmlDoc.ts
  -     - GfmDoc.mts
  +     - GfmDoc.ts
  
  ```
  
  ```diff json
    {
      ...
  +   "type": "module,
      ...
    }
  ```

### replacing `node` with <s>`npx --yes ts-node`</s> `node --import ./scripts/setup-tsnodeimportfixups.mjs`

replacing `node <the-file>` with <s>`npx --yes ts-node <the-file>`</s> [`node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>`](https://github.com/TypeStrong/ts-node/issues/2100)

```diff
- node <the-file>
+ node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>
```

__worth noting__ __[`npx ts-node <main-file>` failed to properly do its thing in Node 20](https://github.com/TypeStrong/ts-node/issues/2100) so
you'll need to switch to `node --import <aux-path> <main-file>`__:

```diff
+ # see https://github.com/TypeStrong/ts-node/issues/2100
- npx --yes ts-node <the-file>
+ node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>
```

see
- https://typestrong.org/ts-node/docs/
- https://github.com/TypeStrong/ts-node/issues/2100 
- [`./scripts/setup-tsnodeimportfixups.mjs`](./scripts/setup-tsnodeimportfixups.mjs)
.

### file [`git-rebase-todos`](./.git/rebase-merge/git-rebase-todo)




## [`./scripts`](./scripts/)

[`./scripts`](./scripts/) is reserved for the build-script(s).




## [`./packages`](./packages/)

[`./packages`](./packages/) is reserved for the project deliverable packages.

as you keep making contributions to the packages
__be sure to keep updating these files__
- the corresponding test-file(s) (generally the package's base dir's `test` )
- [`./scripts/package-listing`](./scripts/packageListing.mjs)
- the corresponding overview "packages" in [`README.md`](./README.md) including the completion checklists
- [the repo-wide `tsconfig.json`](./tsconfig.json)
- [`./next.config.mjs`](./next.config.mjs)

### the packages located in [`./packages`](./packages/) and their structures

the StuDK deliverables nested in directory `packages`

some of these packages
are marked as "commons" or "util",
meaning that they're intended to be reusable outside this FW ;
if you want to define some fw-specific code, which are not intended to be exported,
move such modules into
one of
the `studk-yyy-fwcore` package(s), "framework core", package(s) intended to host the fw-specific code.

as you keep making contribs to any of these package(s)
be sure to keep the checklist in [`README.md`](./README.md) updated.

except as otherwise noted
all source-code were Type-Checked JS.
this
is necessary to allow loading the packages natively in Node without needing to "manually first searching, reaching and hiting the 'build' button".
except for the React-specific stuffs since
for now they'll only be used for the apps written for Vite or Next anyway;
use <s>`npx --yes ts-node <the-file>`</s> [`node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>`](https://github.com/TypeStrong/ts-node/issues/2100) to run such src files - see *replacing `node` with `npx --yes ts-node`* above for the intro to that.

#### `studk-util`

reusable, level-1 infrastructure.

#### `studk-ui`

reusable infrastructure for implementing user-interface(s).

all code (with)in this package
shall be reusable outside this FW ;
use `studk-fwcore` instead, for defining FW-specific conventions

in contrast to the general recommendation of avoiding extra 'manually click to build' step,
a subset of the source files there
will only be used for apps written for Vite or Next, so
one should use TypeScript for that ;
use <s>`npx --yes ts-node <the-file>`</s> [`node --import ./scripts/setup-tsnodeimportfixups.mjs <the-file>`](https://github.com/TypeStrong/ts-node/issues/2100) to run such src files.

#### `studk-demos`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.

for now
the source files in such tree(s)
are only meant to be used within the app;
avoid trying to run those files
even if you're tempted to use <s>`npx --yes ts-node`</s> `node --import ./scripts/setup-tsnodeimportfixups.mjs` or even `esbuild` -
presently no guarantees are made abt running those src files standalone!

#### `studpresenters`

infrastructure for presentation slides.

as you keep making contribs to this package
be sure to keep the checklist in [`README.md`](./README.md) updated.

#### `studk-simulations-commons`

reusable infrastructure for simulations.

all code (with)in this package
shall be reusable outside this FW ;
use `studk-fwcore` instead, for defining FW-specific conventions

as you keep making contribs to this package
be sure to keep the checklist in [`README.md`](./README.md) updated.

#### `studk-dom-util`

reusable utility concerning DOM API(s).

all code (with)in this package
shall be reusable outside this FW ;
use `studk-fwcore` instead, for defining FW-specific conventions

server-side usage of this
will need installing `jsdom` etc or switching to Electron
.

#### `studk-nextjs-util`

reusable utils for implementing Next(JS) apps -
in future we may add additional Next(JS) app packages.

all code (with)in this package
shall be reusable outside this FW ;
use `studk-fwcore` instead, for defining FW-specific conventions

#### the `encore`-named packages

the `encore`-named packages

#### `studk-yyy-fwcore`

packages marked as "fw core" ("framework core") ;
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




## Concerns with Package(s): The `package.json` File, Dependencies, Pkg Managers, Exports, etc

this (sub)section
talks about
*Concerns with Package(s): The `package.json` File, Dependencies, Pkg Managers, Exports, etc* general

for the list(ing) of packages which shall not be removed because eg they serve as the cmd-line tools (eg `ts-node`, `esbuild`, `typescript`, `sass`, etc),
see "The Dependencies Of The StuDK Source(s) And Binaries" below

### when testing, `npm install` shall be replaced with `npm ci`

regular `npm install` (sub)cmd
will show its nondeterminism *from time to time* -
`npm install` *from clean condition* can lead to unexpected, incompatibly-behaving versions of packages.
for guaranteed stability *in testing env(s)*,
replace `npm install` with `npm ci`
.

`npm ci` uses `package-lock.json` exclusively.
during devel
each `npm install` run
update(s) `package-lock.json` ;
the state of `package-lock.json` at given time
tends to reflect the state of the dir `node_modules` (unless you manually make changes to `package-lock.json` or `node_modules`) and therefore
in testing env(s)
`npm ci` would be useful to restore everything there
.
(if you're lucky
regular `npm install` will account `package-lock`
but you shouldn't totally rely on this)

same goes for `pnpm` and other pkg managers.

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
❌ not a good practice
npm install @types/react@^18 @types/react-dom@^18
❌ not a good practice
npm install chokidar glob@10 
❌ not a good practice
npm install @react-three/drei @react-springs/three 
```

```
$ git pull origin main
CONFLICT: `packages/studk-ui-fwcore/package.json
CONFLICT: `packages/studk-fwcore/package.json`
Error: Merge Conflict Encountered
You must fix all conflicts and then
run 'git ... ...'.
$
```

instead,
add into [`package.json`](./package.json) first and then run `npm install` (ie NPM `install` without arguments)
.

```diff json
  {
    "devDependencies": {
        "@types/chai": "^4.3.12",
        "@types/minimist": "^1.2.5",
        "@types/mocha": "^10.0.6",
        "@types/ms": "^0.7.34",
        "@types/node": "latest",
+       "@types/which": "^3.0.3",
        "hereby": "^1.8.9",
    },
    "dependencies": {
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

### caveats with (`package.json`'s) `exports`

__caveats with (`package.json`'s) `exports`__

see https://github.com/TypeStrong/ts-node/issues/1934 (focus at https://github.com/TypeStrong/ts-node/issues/1934#issuecomment-1682786084 ) for
how
`ts-node` failed to properly handle entries of `exports` using path-selector(s) whose wild-card is not at the end (eg `./src/*.ts`) ,
forcing me to work-around the issue

```diff json
  {
    "exports": {

      "./lib/*"   : "./lib/*",

      "./dist/*"  : "./dist/*",

      "./src/*.ts"      : "./src/*.ts"         ,
      "./src/*.tsx"     : "./src/*.tsx"        ,

+     "./src/*"         : "./src/*"            ,

      "./package.json": "./package.json"
    },
  }
```

### caveats with `.mts*` and `.cts*` and `.mjsx` extension(s)

__caveats with `.mts*` and `.cts*` and `.mjsx` extension(s)__

At time of writing, NextJS doesn't seem to support those ext(s). avoid using those ext(s) for the moment; use plain `.ts*` instead.

```diff
  ▼ main
    ▼ PrimitiveTypedInputUi
      - OneLineTextEditor.tsx
      - DatePicker.tsx
    ▼ RichTextModelling
-     - HtmlDocStructure.mts
+     - HtmlDocStructure.ts
-     - GfmDocStructure.mts
+     - GfmDocStructure.ts

```

```diff json
  {
    ...
+   "type": "module,
    ...
  }
```




## The Dependencies Of The StuDK Source And Binaries

__INCOMPLETE__

The Dependencies Of The StuDK Source And Binaries

The Dependencies Of The StuDK Source And Binaries can be divided as:
- INCOMPLETE!
- Compiler, Bundler
- Linter
- Runtime (`ts-node`, `next`)
- `core-js`, `lodash`
- React
- ReactDOM, polyfills, D3




## Scripting Conventions

conventions to be adhered when scripting

except as otherwise noted
all source-code were Type-Checked JS.
this
is necessary to allow loading the packages natively in Node without needing to "manually first searching, reaching and hiting the 'build' button".

prefer `.mjs` ext(s); see "Coding Conventions" below.

### indentations should be 2 spaces (char `0x20`, *SPACE*)

...and __avoid using <code>Tab</code>s__

### avoid using JSON where possible ; use ESM instead

issues with JSON

JSON Specification disallows trailing comma, but
omission of trailing comma doesn't play well Git
(eg unexpected auto-merge corrupting your JSON files)

1) [in your branch] `package.json`:
    ```jsonc
    {
      "imports": {
        "dest": "${project}/dist"
      } ,
    }
    ```
  
2) [in a different branch] [`package.json`] changed:
    ```diff jsonc
      {
        "imports": {
    +     "pipelining": true
        } ,
      }
    ```
  
3) your branch merged that branch:
    ```diff jsonc
      {
        "imports": {
          "dest": "${project}/dist"
    +     "pipelining": true
        } ,
      }
    ```
    
4) the merge ends up making `package.json` corrupted:
    ```jsonc
    // === [Syntax Error] File `package.json`,  line 1 to 6 ========================
        {
          "imports": {
            "dest": "${project}/dist"
            "pipelining": true
    //   ^^^^^^ [Syntax Error] Unexpected Identifier;   Expected Comma Or Closing Brace
          } ,
        }
    ```

this isn't just a joke; this kind of *merge*-related corruption has happened in fact:

- https://github.com/microsoft/TypeScript/pull/50820/commits/1fbaa5c52058c222348c07e0ad7ae49682d222e3 

JSONC and regular JS/TS would avoid the above problem:

```javascript
module.exports = {
    // from current branch
    "dest": "${project}/dist" , // we can freely use trailing comma here, avoiding the above issues
    // from merged branch
    "pipelining": true , // we can freely use trailing comma here, avoiding the above issues
} ;
```

Babel and Webpack config only supports JS files, not JSON.
same for NextJS.
Gulp and Hereby does the same.

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

```javascript
 //❌ BAD!
 for (const segmt of segments )
 {
   if (isG2DClosePathCmd(segmt) )
   { break ; }
 }
```

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
  sendChecksum() ;

+ LOOP:
  for (const { kind, dest, } of instructions )
  {
    /**
     * if kind is "EOF" , break the loop;
     * if kind is "SKIP", jump to the next row;
     */
    switch (kind) {
      case "EOF" :
-       break ;
+       break LOOP ;
      case "SKIP" :
-       continue ;
+       continue LOOP ;
    }
    sendData(nextGeneratedBigInt({ iKind: kind, }) , { dest, }) ;
  }

  sendPaddingAndFlushCloseAllDest() ;
```

yes,
unlabelled `break`s there
would stop at the enclosing `switch` rather than the outer loop.

#### "extract a function" is not always a solution

"extract a function" is not always a solution to these problem.

how'd you do "extract `runCentralLoop`" here?

```javascript
if (transactionOkay)
{
  if (transStepAlreadyHandledByCo )
  {
    return STAT_TAKEN_OVER_BY_CO_EARLY({ transStat, }) ;
  }

  /*
   * he/she (my co-worker)
   * asked me to "extract `function runCentralLoop(instructions)`" this, but
   * there's `return specialReturnValue` there inside!
   */
  PAYLOAD_LOOP:
  for (const { kind, dest, } of instructions )
  {
    await SPCL_SOME_RECESS() ;

    /**
     * if kind is "EOF" , break the loop;
     * if kind is "SKIP", jump to the next row;
     */
    switch (kind) {
      case SpclInstruction.TAKEN_OVER_BY_CO :
        return STAT_TAKEN_OVER_BY_CO_LATE({ kind, dest, etc: transStat, }) ;
      case SpclInstruction.EOF :
        break PAYLOAD_LOOP ;
      case SpclInstruction.SKIP :
        continue PAYLOAD_LOOP ;
    }
    sendData(nextGeneratedBigInt({ iKind: kind, }) , { dest, }) ;
  }

}
```

### Usage Of ESLint In This Project

#### The ESLint Rules For This Project

see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)

#### use `.eslintrc.cjs`, avoid `.eslintrc.json`

(note: ESLint doesn't yet support `.mjs` ext!)

__see "avoid JSON; use ESM instead" above__

Babel and Webpack config only supports JS files, not JSON.

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

-  trying to `require` an ESM-only package

### avoid `lodash`, switch to `lodash-es`

`lodash` cannot be reasonably used in ESM code.
- `module "xyz" does not provide named export 'foo'`
    ```javascript
    import { once, } from "lodash" ;
    // ^^^^^
    // [Error] Import Error:
    // module "lodash" does not provide named export 'once' ;
    // Note: "react" is a CommonJS module which may not provide named export ;
    // CommonJS modules can always be imported using `import * as React from "react"`, and
    // use `const { Context, } = React ` ;
    ```

I got rid of `lodash`, in favour of `lodash-es`,
for these very reasons.

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
name duplication on `@typedef` could be omitted .
(don't forget to tag the accompanying `const` with `@module` as well).
you should do that - it's one of *the best-practices*.

```javascript
/** @typedef {{ x: number, y: number, } } */
/**
 * Point X and Y
 * 
 * @module
 */
export const Point = {} ;
```

when accompanying an `export const Bar = ... ... ;`,
name duplication on `@typedef` could be omitted ;
see `jsdocTreatAsExported` in `binder.ts` on https://github.com/microsoft/TypeScript/blob/0a671aa393760957743e9081c1798d5acc23b2c7/src/compiler/binder.ts#L940

https://github.com/Microsoft/TypeScript/tree/0a671aa393760957743e9081c1798d5acc23b2c7

### Relevant Considerations Affecting TypeScript And Type-Checked JavaScript

some ESLint rules are enforced here -
see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)

relevant open issues with `tsc`:

- Merging, Occurences, Highlighting, of same-named decl(s):
  - (unresolved) https://github.com/microsoft/TypeScript/issues/36626  (missing *merging* for between same-named `const =` and `type =` )
- Dependent-Typing, Type-Guard(s), Aliased Boolean Expr(s) :
  - (unresolved) https://github.com/microsoft/TypeScript/issues/17588 (missing support for Scala-style inner-class(es) ) 
  - (unresolved) https://github.com/microsoft/TypeScript/issues/27808 (missing support for `extends oneof`) 
  - (`5.0`) https://github.com/microsoft/TypeScript/pull/47190 (CFA/narrowing involving destructured property from -   discriminant-union-typed structs )
  - (`5.0`) https://github.com/microsoft/TypeScript/pull/44730 (transparency, of boolean expr aliases (ie `const` without type-ascription ) )
  - (`5.5`) https://github.com/microsoft/TypeScript/pull/57465 (missing inferring of `x is T` signatures )

### potential usage of other interpreted language(s)

*potential future usage of other interpreted language(s)* (eg Dart, Python, `scala-cli`)




## Relevant UI/Front-End Libraries

currently we only use React. however,
we aren't closing the doors for potential alternative FW(s).

### React

get started to learn React;
browse https://react.dev/learn .

some *important lessons* which aren't immediately listed, however:

- https://react.dev/learn/describing-the-ui 
- https://19.react.dev/learn/adding-interactivity 
- https://react.dev/learn/managing-state 
- https://19.react.dev/learn/separating-events-from-effects 




## Routed App Conventions

for example Next(JS),
all those fws which maps client-browsed paths to pages according to the structure in `app` or `pages` tree.

Next(JS) as done in our project:
https://nextjs.org/docs/app/building-your-application 

Next(JS) supports two mutually-exclusive conventions, the newer one `app`, and the earlier one `pages`;
you must first find out "which one", to avoid confusions arising from the differences of how the two modes work.
`studk-demos` uses the `app` convention.

### directive `"use client"` is obligatory at times

### Avoid using `public` directory where possible

### avoid absolute import which involves traversal upwards (ie `../<path>`)

avoid absolute import which involves traversal upwards (ie `../<path>`).
consider
[configuring import-alias(es) as desribed by "Absolute Import Aliases" in `nextjs.org/docs/app`](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases).










