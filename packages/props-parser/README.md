<p align="center">
  <h3 align="center">⚙️ + 🖍️ + 🍪 + 🗄️ + 🌐 + 🔎 = 😎</h3>
  <h3 align="center">DeliveryHero's &laquo;Armor Props Parser&raquo;</h3>
</p>

## Overview

Armor Props Parser scans the repository codebase, find components and extracts their property type declarations. The output is a JSON file.

## Installation

1. Clone the repository, `cd` to the folder.
2. If not done before, generate a `GITHUB_TOKEN` and store it as an env variable as described [here](https://armor.deliveryhero.com/251886272/p/134923-engineers).
3. Run `yarn setup` to install all the packages.
4. Run `yarn install-peers` to install all peer packages.

## Local launch

1. `cd` to `packages/props-parser`.
2. Run the development version: `yarn dev run -p <PROJECT_FOLDER> -o <OUTPUT_FILE>`, where
   * `PROJECT_FOLDER` is a path to the folder where the Armor repository is cloned to.
   * `OUTPUT_FILE` is a path to the file where the output will be dumped.

## Deployment

1. Create a PR from your feature branch to the `dev` branch, then **squash and merge**.
2. Then make a PR from `dev` to `master`, then **merge**.
3. The CD pipeline will build and publish a new version of the package.

## Contacts

- [Dominik Mertz](mailto:dominik.mertz@deliveryhero.com)
- [Vuong Vu](mailto:vu.vuong@deliveryhero.com)
- [Vijay Singh](mailto:vijay.singh@deliveryhero.com)

## Author

- [Sergei Gannochenko](mailto:sergei.gannochenko@deliveryhero.com)
