# Web Template Application

## Prerequisite

- VS Code's extensions:
  - EditorConfig
  - TODO Highlight
  - ESLint
  - Code Spell Checker

- Yarn: <https://yarnpkg.com/>

## Note

- Use `yarn` instead of `npm`.
- Don't forget to commit `yarn.lock` when you are adding new packages.

## How to Start

- Create `.env.development.local` from `.env.development` with your own modifications:

```sh
cp .env.development{,.local}
```

- Install app dependencies:

```sh
yarn install
```

- Install Husky:

```sh
yarn prepare
```

- Start the development server:

```sh
yarn dev
```

## Project Structure

- `pages`: Next.js pages
  - `api`: API Routes
  - `sandbox`: Sample pages for testing
- `public`: Public assets
- `tests`: Unit tests code by Jest
- `styles`: Styling files
- `src`: Main directory for source code
  - `components`:
    - `elements`: Small components: Buttons, Icons, Input...
    - `widgets`: Larger components: Banner, Pagination, Modals...
    - `screens`: Screen component (largest components which are used directly from `pages`)
    - `layouts`: Components related to layout
    - Others are waiting for refactoring
  - `config`: Put global config files
  - `contract`: Put files related to Smart Contract
  - `hooks`: Global custom React hooks
  - `libs`: Utilities functions (Deprecated)
  - `models`: Helpers
  - `utils`: Utilities functions

## Other commands

- `yarn prepare`: Install Husky.
- `yarn ts-check`: Validate types of TypeScript files.
- `yarn lint`: Report linting issues for TypeScript files.
- `yarn lint-style`: Report linting issues for SASS files.
- `yarn prettier --config .prettierrc 'src/**/*.{ts,tsx}' --write`: Format code on `src` directory.
- `yarn prettier --config .prettierrc 'pages/**/*.{ts,tsx}' --write`: Format code on `pages` directory.

## Use with Docker

TBD...
