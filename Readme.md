# Pokedex - Monolithic Repository

## Overview
- Pokedex is mono repo application built up with the help of lerna.
- A mono repo, short for monolithic repository, is a software development approach that involves storing multiple projects or components within a single repository. This architecture simplifies code sharing, dependency management, and overall project maintenance. 

- Lerna is a popular tool for managing mono repos, enabling us to version, publish, and manage interdependent projects efficiently.

- This application contains 2 packages namely `@pokedex/components` and `@pokedex/utils` which is bundle using rollup and used in the main pokedex nextjs application.

- Rollup is a module bundler that optimizes and packages JavaScript code into smaller, more efficient bundles. It's particularly suitable for creating libraries or applications that require minimal overhead and optimal performance.

## Getting started

To run the Pokemon application locally, you'll need to follow these steps:

### Prerequisites

- [Node.js](ttps://nodejs.org/en/) (v16 or higher) installed on your machine.
- Yarn installed.
- Typescript


### Project Setup

**Install dependencies**
- `yarn bootstrap` internally installed the dependencies of parent package.json and then run `lerna bootstrap` so that the dependencies of packages are installed.

```sh
yarn bootstrap
```
**Compile packages required for pokedex**
- `yarn compile` compile the dependent packages i.e. `@pokedex/components` and `@pokedex/utils` with the help of rollup bundler, which is used in `pokedex` nextjs application.

```sh
yarn compile
```

#### Running the app in development
- `yarn dev` runs the `pokedex` nextjs application in development mode
```sh
 yarn dev
```

#### Running the app for production
- `yarn build` builds the `pokedex` nextjs application.
- `yarn prod` run the `pokedex` nextjs application in production mode.
```bash
# building
yarn build

# production mode
 yarn prod
```

#### Running the app using docker

```bash
# building image from base folder
 docker build .

# runnnig the image
 docker run -d -p exposedPort:containerPort <imageId>
```

#### Test

For this project, We chose [Jest](https://facebook.github.io/jest/) as our test framework.

```bash
# unit tests
 yarn test

```

## Yarn Modules

Yarn is a package manager for JavaScript projects that offers several benefits over npm. It uses a modular approach to package management, ensuring consistent dependencies through a lockfile. Yarn's parallel and deterministic algorithm improves performance and speeds up installations. It optimizes network efficiency by caching packages and supports offline mode. Workspaces simplify managing multiple packages in a mono repo. Yarn prioritizes security by detecting vulnerabilities and supports signed package sources. Overall, Yarn enhances dependency management, performance, and security, making it a valuable tool for JavaScript developers.

## Documentation
- [MUI-Component](https://mui.com/material-ui/react-grid/)
- [MUI datagrid](https://mui.com/x/react-data-grid/)
- [eslint](https://eslint.org/docs/latest/use/getting-started)
- [prettier](https://prettier.io/docs/en/index.html)
- [react-dom](https://react.dev/)
- [react-redux](https://react-redux.js.org/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-scripts](https://react.dev/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [Husky](https://typicode.github.io/husky/)

