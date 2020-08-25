[![Actions Status](https://github.com/deliveryhero/armor/workflows/CI.REACT/badge.svg)](https://github.com/deliveryhero/armor/actions)
---

<p align="center">
  <h3 align="center">⚙️ + 🖍️ + 🍪 + 🗄️ + 🌐 + 🔎 = 😎</h3>
  <h3 align="center">DeliveryHero Armor Design System: React</h3>

  <p align="center">
    This is a UX System that is used in the React projects of the company.
    <br />
    <br />
    <a href="https://deliveryhero.github.io/armor/">Docs</a>
    ·
    <a href="https://github.com/deliveryhero/armor/issues">Report Bug</a>
    ·
    <a href="https://github.com/deliveryhero/armor/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Development](#development)
  * [Installation](#installation)
  * [Local usage](#local-usage)
    * [Option 1: yarn link](#option-1-yarn-link-or-npm-link)
    * [Option 2: yalc](#option-2-yalc)
    * [Troubleshooting](#troubleshooting)
  * [Branching model](#branching-model)
  * [Contribution rules](#contribution-rules)
    * [For contributors](#for-contributors)
      * [Component requirements](#component-requirements)
      * [Adding a new component](#adding-a-new-component)
      * [Contribution steps and requirements](#contribution-steps-and-requirements)
    * [For maintainers](#for-maintainers)
  * [Editing the documentation](#editing-the-documentation)
  * [Manual publishing](#manual-publishing)
* [Contact](#contact)
* [Built With](#built-with)

## About The Project

Todo: when there is something inside, write a short intro to the project

## Prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Usage

To use the UI offered by this project you need to install an NPM package and consume it in the code of your application.
In order to do that, follow these steps:

1. [Generate your own GitHUB token](https://github.com/settings/tokens) with the following conditions:
    * permissions: **read:packages**, **repo**
    * SSO: enabled
2. Add the token as an environment variable:
    ~~~bash
    printf "\nexport GITHUB_TOKEN=<your-token-goes-here>\n" >> ~/.bash_profile; # .bashrc in linux
    source ~/.bash_profile;
    ~~~
3. In your application next to the `package.json` file create another file called `.npmrc` with the following content:
    ~~~
    @deliveryhero:registry="https://npm.pkg.github.com/"
    //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
    ~~~
    If you already have this file, just to append the lines above to it.
4. Install the package
    ~~~bash
    yarn add @deliveryhero/armor
    ~~~
5. Start coding!
    ~~~javascript
    import { Button } from '@deliveryhero/armor';
    ~~~

## Development

If you wish to make a contribution to the library, you need to setup the development environment on your local machine.

### Installation

1. Clone the repo
    ~~~bash
    git clone git@github.com:deliveryhero/armor.git
    ~~~
2. Install NPM packages everywhere
    ~~~bash
    cd ui/web/;
    yarn;
    cd packages/react/;
    yarn setup;
    ~~~
3. We utilise `Storybook` as a primary tool for development. To launch `Storybook`, type
    ~~~bash
    yarn dev;
    ~~~
4. Open [http://localhost:6006/](http://localhost:6006/) and start developing :)

### Local usage

You may want to try out the latest changes you made in some locally installed React application without bumping out anything to NPM.
You have two options here.

#### Option 1: yarn link or npm link

0. Make sure that no peer dependencies installed by typing
    ~~~bash
    cd web/packages/react;
    yarn;
    ~~~
1. Link the package to `yarn`:
    ~~~bash
    yarn link;
    ~~~
    or if the project uses `npm`:
    ~~~bash
    npm link;
    ~~~
2. Link the package to the application:
    ~~~bash
    cd <application-folder>;
    yarn link "@deliveryhero/armor";
    ~~~
    or if the project uses `npm`:
    ~~~bash
    cd <application-folder>;
    npm link "@deliveryhero/armor";
    ~~~

⚠️ Note: in order to continue working in `Storybook` you need to install peer dependencies back by typing
~~~bash
yarn run install-peers;
~~~

⚠️ Note: if you use custom `webpack` config, make sure that `resolve.symlinks` is set to `false`.

#### Option 2: yalc

1. Install `yalc`:
    ~~~bash
    yarn global add yalc
    ~~~
2. "Publish" the package to `yalc`:
    ~~~bash
    cd web/packages/react;
    yalc publish;
    ~~~
3. Link the package to the application:
    ~~~bash
    cd <application-folder>;
    yalc link "@deliveryhero/armor";
    ~~~

Further reading: [yalc docs](https://github.com/whitecolor/yalc).

#### Troubleshooting

* White screen of website death + Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component<br />
    Probable cause: you got two instances of `styled-components`: one - from the app, another - from the linked module. Remove either one of them.

## Branching model

In this project we use a simplified Git Flow branching model:
* `master` branch to make releases
* `dev` branch to combine several features and test them together before making a release
* `feature branches` to develop separate features

## Contribution rules

Contributing on regular basis is what really helps this project to advance. Any contributions you make are **greatly appreciated**.
The project tries to maintain healthy balance between comfortable development and restrictions that prevent everything from falling into chaos.
Therefore, there are certain rules a contributor must follow in order to make the process straightforward and error-proof.

### For contributors

#### Component requirements

Every new component should have:

* unit tests,
* at least one story of Storybook.

When modifying existing components:

* try to support backward compatibility while making updates.

#### Adding a new component

Checklist on how to add a component:

1. Go to `src/components` folder and generate a component boilerplate
2. Add `export * from './<component_name>';` to `src/components/index.js` (todo: automate this)
3. Create a snippet story in `doc/stories` (todo: automate this)
4. Check out what MaterialUI and other library have as best practices
5. Think through the component logic and structure, create a layout
6. Make sure that every layout node has:
    1. theme entry
    2. classname entry
    3. style override entry
    4. theme is forwarded as a property

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

#### Accepting a Pull Request to dev branch

1. Use `Squash-and-Merge` when merging to `dev`,
2. Copy the `PR` name to the name of a `squash commit` (it should be <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" target="_blank">conventional</a>).<br />
    Example: `feat: a new amazing component added` => `feat: a new amazing component added`

#### Deploying changes

As soon as there are several features merged into `dev`, it is time to publish a new version. To do so:

1. Create a PR from `dev` to `master`, wait for linter and tests finish with their work.
2. Merge the PR with the following prefix in the name:
    1. add `fix:` prefix if the commits merged to `dev` had only `fix:` prefixes (this will increment `patch` version number),
    2. add `feat:` prefix if one of the commits merged to `dev` had `feat:` prefix (this will increment `minor` version number),
    3. add `BREAKING CHANGES` note into the commit name, if one of the commits merged into `dev` had `BREAKING CHANGES` in the name (this will increment `major` version number).

    ⚠️ Use of `feat:` and `fix:` prefixes together is not allowed.

    ⚠️ Please don't use "Squash and merge" or "Rebase" when merging changes from `dev` to `master` as it will make GitHub really confused.
    
    ℹ️ This routine may be automated in future.
3. As soon as the PR gets merged, [a new version will be published](https://github.com/deliveryhero/armor/packages/210156).
4. An updated version of the [documentation](https://deliveryhero.github.io/armor/) will be published as well.
5. There is no need to pull back the `master` branch locally after the CD process is done. In fact, you should not have the `master` branch locally at all.
6. The package version in `package.json` will not be updated and this is absolutely normal, because the remote version only matters.

⚠️ Please note that pushing directly to `master` or `dev` without making a PR is strictly prohibited.

### Editing the documentation

We use `Styleguidist` to provide user-oriented documentation. To update the documentation type:

1. Run `Styleguidist`
    ~~~bash
    cd web/packages/ui/react/;
    yarn doc;
    ~~~
2. Open [http://localhost:6060/](http://localhost:6060/) and start documenting :)

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

## Useful links

### Testing

 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions

## Contact

 - [Sergei Gannochenko](sergei.gannochenko@deliveryhero.com)

Project Link: [https://github.com/deliveryhero/armor](https://github.com/deliveryhero/armor)

### Built With

<details>
  <summary>Tools used in this module</summary>
  <p>&bull; <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a></p>
</details>
