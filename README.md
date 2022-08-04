# Unification Documentation

Repository for all Unification project documentation.

The documentation repository is structured such that docs can be written in Markdown. Docs are compiled and published 
using Vuepress, meaning that it is also possible to include Vue components. 
See [Vuepress docs](https://vuepress.vuejs.org/guide/) for more details.

## Setup

Yarn is the preferred package manager to use. Node v16.16+ is required.

Install the dependencies:

```bash
yarn install
```

### Developing

While writing docs, the `vuepress` development server can be used to view changes.

Run in development mode:

```bash
yarn run dev
```

Output can be viewed on [http://localhost:8080/](http://localhost:8080/)

## Build docs

Build docs for distribution:

```bash
yarn run build
```
