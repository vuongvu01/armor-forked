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
  * [Manual deployment](#manual-deployment)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Built With](#built-with)

<!-- ABOUT THE PROJECT -->
## About The Project

Todo: when there is something inside, write a short intro to the project

<!-- USAGE -->
## Usage

<!-- Development -->
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
3. Run Storybook
    ```sh
    // todo
    ```

### Local usage

You can use the development version of the library in local projects without bumping a new version to `npm`.<br />
There are two ways to do so.

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
    Probable cause: you got two instances of `styled-components`: one - from the app, second - from the linked module. Remove either one of them.

### Manual deployment

Attention: manual deployment is not recommended and should be performed only if the fully-functional CI/CD is not available.

<!-- ROADMAP -->
## Roadmap

Todo: put a link to the ticket system when it is ready

<!-- BRANCHINGMODEL -->
## Branching model

In this project we use a simplified Git Flow branching model:
* `master` branch to make releases
* `dev` branch to combine several features and test them together before making a release
* `feature branches` to develop separate features

<!-- CONTRIBUTING -->
## Contributing

Contributions are what really helps this project to advance. Any contributions you make are **greatly appreciated**.
However, there are certain rules a contributor must follow in order to make the process straightforward and life of the maintainers easier.

### New component requirements

// todo (tests, story, styleguide, rebuild)

### Contribution steps

The algorithm of making a contribution:

0. Switch to `dev` branch and pull the latest changes in<br />
    ~~~bash
    git checkout dev
    git pull origin dev
    ~~~
1. Create your Feature Branch locally<br />
    Please, use conventional feature naming:
    * prefix `feat/` - regular features
    * prefix `fix/` - fixes
    * branch name should be in `kebab` case
    ~~~bash
    git checkout -b feat/amazing-component
    ~~~
3. Make one or several commits into your branch<br />
    You are free to use any commit message format, as it is there mostly for your personal needs.
    ~~~bash
    git commit -m 'Added some AmazingComponent'
    ~~~
4. Push to the remote Branch
    ~~~bash
    git push origin feat/amazing-component
    ~~~
5. Open a Pull Request with the <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" target="_blank">conventional name</a>.

### For maintainers
When accepting a Pull Request
* use `squash-and-merge` when merging to `dev`,
* copy the PR name into the name of a squashed commit (it should be <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" target="_blank">conventional</a>).

Please note that pushing directly to `master` or `dev` without making a PR is strictly prohibited and therefore not possible. Please respect other contributors and keep the process clear.

<!-- CONTACT -->
## Contact

 - [Sergei Gannochenko](sergei.gannochenko@deliveryhero.com)

Project Link: [https://github.com/deliveryhero/ui](https://github.com/deliveryhero/ui)

<!-- BUILT WITH -->
### Built With

<details>
  <summary>Tools used in this module</summary>
  <p>&bull; <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a></p>
</details>
