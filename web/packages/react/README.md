[![Actions Status](https://github.com/deliveryhero/ui/workflows/CI.REACT/badge.svg)](https://github.com/deliveryhero/ui/actions)
---

<p align="center">
  <h3 align="center">⚙️ + 🖍️ + 🍪 + 🗄️ + 🌐 + 🔎 = 😎</h3>
  <h3 align="center">DeliveryHero UX System: React</h3>

  <p align="center">
    This is a UX System that is used in the React projects of the company.
    <br />
    <br />
    <a href="about:blank">View Demo</a>
    ·
    <a href="https://github.com/deliveryhero/ui/issues">Report Bug</a>
    ·
    <a href="https://github.com/deliveryhero/ui/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Usage](#usage)
* [Development](#development)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Local usage](#local-usage)
    * [Option 1: yarn link](#option-1-yarn-link)
    * [Option 2: yalc](#option-2-yalc)
    * [Troubleshooting](#troubleshooting)
  * [Manual publishing](#manual-publishing)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
  * [Branching model](#branching-model)
  * [For contributors](#for-contributors)
      * [Contribution rules](#contribution-rules)
      * [New component requirements](#new-component-requirements)
  * [For maintainers](#for-maintainers)
* [Contact](#contact)
* [Built With](#built-with)

## About The Project

Todo: when there is something inside, write a short intro to the project

## Usage

## Development

### Prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installation

1. Clone the repo
    ```sh
    git clone git@github.com:deliveryhero/ui.git
    ```
2. Install NPM packages
    ```sh
    cd web/;
    yarn;
    cd web/packages/react;
    yarn;
    yarn run install-peers;
    ```
3. Run `Storybook` and start developing!
    ```sh
    yarn storybook
    ```

### Local usage

It is not possible to bump a new version to `npm` out every time you change the library locally.
Nevertheless, there is a way to develop simultaneously both the library and the application that consumes it locally.
You have two options to do so.

#### Option 1: yarn link

1. Link the package to `yarn`:
    ~~~sh
    cd web/packages/react;
    yarn link;
    ~~~
2. Link the package to the application:
    ~~~sh
    cd <application-folder>;
    yarn link "@deliveryhero/ui.react";
    ~~~

#### Option 2: yalc

1. Install `yalc`:
    ~~~sh
    yarn global add yalc
    ~~~
2. "Publish" the package to `yalc`:
    ~~~sh
    cd web/packages/react;
    yalc publish;
    ~~~
3. Link the package to the application:
    ~~~sh
    cd <application-folder>;
    yalc link "@deliveryhero/ui.react";
    ~~~

Further reading: [yalc docs](https://github.com/whitecolor/yalc).

#### Troubleshooting

* White screen of website death + Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component<br />
    Probable cause: you got two instances of `styled-components`: one - from the app, another - from the linked module. Remove either one of them.

### Manual publishing

⚠️ Attention: manual publishing is not recommended and should be performed only if the fully-functional CI/CD is not available.

*Setting up yarn (optional)*:
Please, follow the instruction on <a href="https://confluence.deliveryhero.com/pages/viewpage.action?spaceKey=RPS&title=GitHub+as+package+registry" target="_blank">how to authenticate at the github package registry</a>.

To manually publish a new version of the package, follow these steps:
1. commit all your changes,
2. run
    ~~~bash
    cd web/packages/react;
    ./script/release.sh;
    ~~~
   and specify a desired version in the end.
   
3. push version up made by `yarn` in `package.json`
4. todo: re-build and re-publish Styleguidist

## Roadmap

Todo: put a link to the ticket system when it is ready

## Branching model

In this project we use a simplified Git Flow branching model:
* `master` branch to make releases
* `dev` branch to combine several features and test them together before making a release
* `feature branches` to develop separate features

## Contribution rules

Contributions are what really helps this project to advance. Any contributions you make are **greatly appreciated**.
The project tries to maintain healthy balance between a comfortable development process and restrictions that prevent everything from falling into chaos.
Therefore, there are certain rules a contributor must follow in order to make the process straightforward and error-proof.

### For contributors

#### Component requirements

Every new component should have:
* unit tests,
* at least one story of Storybook.

When modifying existing components:
* try to support backward compatibility while making updates.

#### Contribution steps and requirements

The algorithm of making a contribution:

0. Switch to `dev` branch and pull the latest changes in<br />
    ~~~bash
    git checkout dev
    git pull origin dev
    ~~~
1. Create your Feature Branch locally<br />
    Please, use conventional feature naming:
    * prefix `feat/` for regular features,
    * prefix `fix/` - for fixes,
    * prefix `chore/` - for infrastructure/ci-cd pipeline/etc. changes.

    Use of other prefixes like `test/` or `doc/` is allowed but not required.<br />
    Branch name should be in `kebab` case.<br />
    Example:
    ~~~bash
    git checkout -b feat/amazing-component
    ~~~
3. Make one or several commits into your branch<br />
    You are free to use any commit message format, as it is there mostly for your personal needs.
    Example:
    ~~~bash
    git commit -m 'added some AmazingComponent'
    git commit -m 'the weather is so awesome today'
    ~~~
4. Push to the remote Branch
    Example:
    ~~~bash
    git push origin feat/amazing-component
    ~~~
5. Open a Pull Request with the <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" target="_blank">conventional name</a>.
    Examples:
    * `feat: a new amazing component added`
    * `fix: that annoying bug is finally caught`
    * `chore: deployment pipeline fixed`
    * `doc: fixed that old typo in readme`

### For maintainers

When accepting a Pull Request:
* use `Squash-and-Merge` when merging to `dev`,
* copy the `PR` name to the name of a `squash commit` (it should be <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" target="_blank">conventional</a>).<br />
    Example: `feat: a new amazing component added` => `feat: a new amazing component added`

Please note that pushing directly to `master` or `dev` without making a PR is strictly prohibited and therefore not possible.

## Contact

 - [Sergei Gannochenko](sergei.gannochenko@deliveryhero.com)

Project Link: [https://github.com/deliveryhero/ui](https://github.com/deliveryhero/ui)

### Built With

<details>
  <summary>Tools used in this module</summary>
  <p>&bull; <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a></p>
</details>
