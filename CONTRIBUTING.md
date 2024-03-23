









# CONTRIBUTING For This Project




## Coding Conventions

### indentations should be 2 spaces (char `0x20`, *SPACE*)

...and __avoid using <code>Tab</code>s__

### avoid using plain `.js` ext for JS files ; use `.cjs` or `.mjs`

avoid using plain `.js` ext for JS files,
usually `import`s will be rejected in plain `.js`es, so
needs to rewrite (in)to `.cjs` or `.mjs`
(maybe not that much of an issue if they were (the needing extra compile-step, type-ascription-heavy superset ) TS instead )

### `break` should always be labelled

```javascript
/* avoid */
for (const segmt of segments )
{
  if (isG2DClosePathCmd(segmt) )
  { break ; }
}

/* OK */
LOOP_1:
for (const segmt of segments )
{
  if (isG2DClosePathCmd(segmt) )
  { break LOOP_1 ; }
}
```

### DO NOT use `eslint:recommended`!

`eslint:recommended` would try to get rid of labels, but
that's against best practices of *explicit is better than implicit*, so
you should disable the check

more generally,
`eslint:recommended`
tries to get rid of a large number of common, safe constructs,
whose avoiding would require even worse constructs
(eg forced to resort to more bug-prone, implicit label-less `break`s),
so don't enable it

### avoid `typeof x === "object"`
```javascript
/** @type {number | number[] | null } */ const xArg ;

if (typeof xArg === "object") {
  // what if `xArg` were `null` ?
}

```

### avoid potential pit-falls in null-checking of `number`
```javascript
({ height: heightArg, }) => {
  ;
  
  /* avoid these */
  if (heightArg) { return proceed({ height: heightArg, }) ; } /* wrong ; `0` would coerce to `false` */
  
  /* OK */
  if (typeof heightArg === "number" ) { return proceed({ height: heightArg, }) ; } /* OK ; `heightArg?.toPrecision` would only evaluate to non-null if (1) `heightArg` is non-null, and (2) `toPrecision` exists on it (necessarily the case if it's a ``number ) */

  ;
}

```

### `@typedef` name omission when accompanying an `export const Bar = ... ... ;`

when accompanying an `export const Bar = ... ... ;`,
name duplication on `@typedef` could be omitted ;
see `jsdocTreatAsExported` in `binder.ts` on https://github.com/microsoft/TypeScript/blob/0a671aa393760957743e9081c1798d5acc23b2c7/src/compiler/binder.ts#L940

https://github.com/Microsoft/TypeScript/tree/0a671aa393760957743e9081c1798d5acc23b2c7

### Relevant Considerations Affecting Coding

see [the ESLint Config CJS File, `./eslintrc.cjs`](./eslintrc.cjs)

relevant open issues with `tsc`:

- Merging, Occurences, Highlighting, of same-named decl(s):
  - https://github.com/microsoft/TypeScript/issues/36626  (missing *merging* for between same-named `const =` and `type =` )
- Dependent-Typing, Type-Guard(s), Aliased Boolean Expr(s) :
  - https://github.com/microsoft/TypeScript/issues/17588 (missing support for Scala-style inner-class(es) ) 
  - https://github.com/microsoft/TypeScript/issues/27808 (missing support for `extends oneof`) 
  - https://github.com/microsoft/TypeScript/pull/47190 (CFA/narrowing involving destructured property from -   discriminant-union-typed structs )
  - https://github.com/microsoft/TypeScript/pull/44730 (transparency, of boolean expr aliases (ie `const` without type-ascription ) )
  - https://github.com/microsoft/TypeScript/pull/57465 (missing inferring of `x is T` signatures )










