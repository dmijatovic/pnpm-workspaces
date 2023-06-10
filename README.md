# PNPM workspaces test

This repo tests use of pnmp and workspaces for monorepo setup of the project. The goals is to have multiple modules in the same project and enable sharing of components and utility methods among the modules.

## Install pnpm

For more options [see documentation](https://pnpm.io/installation)

```bash
# install using npm
npm install -g pnpm

# validate
pnpm --version
```

## Initialise pnpm project

```bash
pnpm init
```

## Create workspace

Create pnpm-workspace.yaml file and define modules

```yaml
packages:
  - 'rsd-home'
  - 'rsd-software'
  - 'rsd-projects'
  - 'rsd-core'
```
