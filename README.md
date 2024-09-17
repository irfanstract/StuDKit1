






# StuDKit




## Downloading, And Launching The Demo(s)

### Cloning This Repo

open Terminal and run:
```
[J:/Dev/] mkdir StuDKitSrcs

[J:/Dev/] cd StuDKitSrcs

[J:/Dev/StuDKitSrcs/] git clone --depth=3 https://github.com/irfanstract/StuDKit1.git .
writing objects 100% done.

[J:/Dev/StuDKitSrcs/] npm ci
[npm]
100 packages installed in 7s

35 packages need funding
-> run 'npm audit' for details

[J:/Dev/StuDKitSrcs/]

```
then, consider opening the dir in a supporting IDE.

### ...and then...

package `studk-demos` in directory `(project-root)/packages`
is [a NextJS app](https://nextjs.org/docs/) can be run by

- hovering (in field `"scripts"`) key `"dev"` and then click the floating `Run Task`.
  or
- entering `npm run studk-demos` or (if lucky) `npx studk-demos`

and then open the (`localhost`) URL shown.

### the package `studk-demos` nested in `packages`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.




## running, testing, and adopting these delivered packages in your own projects (JS projects)

consider reading "contributing changes to this repo" below first.

all deliverable packages go to `packages`.

### the package `studk-demos` nested in `packages`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.

### StuDK deliverables nested in `packages`

the StuDK deliverables nested in directory `packages`

#### `studk-demos`

its `package.json` has `script` entry `dev` to run the dev server; if started, it should report the URL which u should then open.
you should then see some showcases; they're mostly stuffs building on these packages developed here in this monorepo.

#### `studpresenters`

- [ ] infrastructure for presentation slides

#### `studk-simulations-commons`

infrastructure for simulations

- [x] trigonometry units
- [ ] trigonometry utils
- [ ] timers
- [ ] musical
- [ ] physics

#### the `typexpe-commons` packages

this one package was pulled here from onea my other codebase.
the naming of the stuffs defined there seems rather arbitrary.
in future this pkg may get externalised away from this monorepo.

#### the `studk-yyy-fwcore` packages

internal package defining the conventions across the packages there.
internal only.

### the package `typexpe-commons` nested in `packages`

this one package was pulled here from onea my other codebase.
the naming of the stuffs defined there seems rather arbitrary.
in future this pkg may get externalised away from this monorepo.




## contributing changes to this repo

contributing changes to this repo?
see [`CONTRIBUTING.md`](./CONTRIBUTING.md)














