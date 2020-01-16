# Create-react-app Coding Labs Template

## Pre-requisites

You need some VistualStudio Code extensions installed:

- ESLint
- Prettier

Also, `commitizen` is used to standarize commit messages.

## Installation

To use this tempalate, you need to install it via `cra-create-app`:

```bash
npx cra-create-app <my-app> --template codinglabs
```

After initial install, you may need to install the dev dependencies. You can run `yarn:init` or add dev dependencies manually:

```bash
eslint-plugin-react@^7.14.3 eslint-config-airbnb@latest eslint@^6.1.0 eslint-plugin-import@^2.18.2 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^1.7. prettier eslint-config-prettier eslint-plugin-prettier babel-eslint eslint-import-resolver-babel-plugin-root-import babel-plugin-root-import customize-cra react-app-rewired node-sass commitizen cz-conventional-changelog husky lint-staged @commitlint/cli @commitlint/config-conventiona
```

## Available Scripts

Aside from normally installed scripts, there are 2 more:

### `yarn coverage`

Creates test coverage report in `__tests__/coverage`

### `yarn lint`

Peforms a `eslint --fix` in staged files

### `yarn init:yarn`

Installs dev dependencies

## Commit Messages

This template comes with Husky hooks, commitzen and commitlint to produce standard commit messages!

## Configuration

In case the is an error with your `package.json` configuration, a copy of the custom variables is next:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint",
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  },
  "jest": {
    "roots": ["<rootDir>/__tests__/"],
    "testMatch": ["**/*.test.js"],
    "moduleNameMapper": {
      "^~/(.*)": "<rootDir>/src/$1",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.js"
    },
    "coverageDirectory": "__tests__/coverage"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```
