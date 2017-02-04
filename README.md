# ES "Next" Reference

This project exists as a baseline for ES6/7 projects.  It is the product of multiple Node projects I have worked on in the past.

The easiest way to see it working is:

1. Clone this repo
1. Install packages: `npm install`
1. Run tests: `npm t`

## Features
### Babel
Babel is used to transpile the `/src/` and `/tests` folders into the `/.compiled/src` and `/.compiled/tests` folders.  Three scripts are used to facilitate the "build" process:

* `clean` - removes all files from the `/.compiled` folder.
* `compile` - runs babel and outputs files to `/.compiled` WITHOUT removing previous content.
* `recompile` - runs `clean` and then `compile`

If you want to copy additional files that are not copied or transpiled by babel, you should initiate that process in the `compile` script.

### Linting
ESLint is setup to lint code in the `/src/` and `/tests` folders and configured in `.eslintrc`.  Two npm scripts are provided:

* `npm run lint` - Lints and returns errors
* `npm run lintfix` - Lints fixing any auto-fixable errors.  Any non-fixable errors are returned.

### VSCode Debugging
This project assumes VSCode as the IDE, although all the code and scripts should work in other editors as well.  The `compile` and `recompile` scripts generate source maps, so that the `Launch Program` and `Launch Tests` will break on breakpoints set in the non-transpiled code.  The [source-map-support](https://www.npmjs.com/package/source-map-support) package fixes stack traces for files with source maps; however, there are currently issues (either in that package or how it is configured in this project) that prevent breakpoints from being hit when using the async/await pattern for async code.

### Tests
Mocha is currently used for example tests, although any other framework could be swapped in.  Babel runs against the `/tests` folder and outputs to `/.compiled/tests`.  If you would like to replace mocha, you will need to replace the code in `/tests` and update the npm `test` script.  You will also need to update the `Launch Tests` configuration in `/.vscode/launch.json` if you want to continue supporting test debugging.

## Using this code
The easiest way that I have found to start a new project with this repo is to:

1. Clone the repo
1. Remove the `/.git` folder
1. Run `git init`
1. ???
1. Profit

FWIW, I have given up merging changes from this repo back into derived projects which is why I recommend blowing away and re-initializing the repo.  Manually adding changes back into derived projects has been a "less correct" yet much more practical approach. YMMV.

Technically, this project is released under the MIT license which allows you to "use, copy, modify, merge, ..." this project regardless of what you do with the `/.git` folder.  But if you do recreate the repo, if nothing else, I would appreciate a link back to this repo.  Thanks!
