# bun-package-starter
A starter template for creating a new node package using bun.
Complete with linting, testing, and building.

## Features
- Typescript v5
  - strict mode
- Bun v1.2
- Eslint v9
- Github Actions; for `CI` and `publish` to npm
- Write CLI scripts with support of [meow](https://www.npmjs.com/package/meow)

## Usage
Click the [use this template](https://github.com/nothingrandom/bun-package-starter/generate) button to create a new repo with this starter kit.

OR

Run `bun create nothingrandom/bun-package-starter ./my-package`

## Setup
```bash
# install dependencies
bun install

# run tests
bun test

# run lint, see eslint.config.js
bun run lint

# build the package to dist/
# comes with typescript declaration files
bun run build
```

## Publishing
- Setup a `NPM_TOKEN` secret in your Github repository; which should be a ["automation" access token](https://docs.npmjs.com/about-access-tokens)
- Update the `name`, `description`, `repository`, `author`, and `license` fields in `package.json`
- Update the version in `package.json`
- Commit the changes
- Publish a new release on Github
- Github Actions will publish the package to npm
