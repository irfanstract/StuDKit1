






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











