[![Actions Status](https://github.com/deliveryhero/armor/workflows/CI.REACT/badge.svg)](https://github.com/deliveryhero/armor/actions)
---

<p align="center">
  <h3 align="center">⚙️ + 🖍️ + 🍪 + 🗄️ + 🌐 + 🔎 = 😎</h3>
  <h3 align="center">DeliveryHero's &laquo;Armor&raquo; Design System</h3>

  <p align="center">
    <a href="https://armor.deliveryhero.com/251886272/p/00ecf6-component-status">Docs</a>
    ·
    <a href="https://armor.deliveryhero.com/251886272/p/98480e-introduction">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Contribution](#contribution)
  * [Local installation](#local-installation)
  * [Local usage](#local-usage)
    * [Option 1: yarn link](#option-1-yarn-link-or-npm-link)
    * [Option 2: yalc](#option-2-yalc)
    * [Troubleshooting](#troubleshooting)
  * [Branching model](#branching-model)
  * [Contribution rules](#contribution-rules)
    * [Adding a new component](#adding-a-new-component)
    * [Contribution steps and requirements](#contribution-steps-and-requirements)
* [Publishing](#publishing)
* [Contacts](#contacts)
* [Built With](#built-with)

## Prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Usage

This project is a library, which is shipped as a set of NPM modules. To install the modules into your application, do the following:

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
    ~~~js
    import { Button } from '@deliveryhero/armor';
   
    <Button>Hello</Button>
    ~~~

## Contribution

### Local installation

1. Clone the repo
    ~~~bash
    git clone git@github.com:deliveryhero/armor.git armor
    ~~~
2. Install NPM dependencies
    ~~~bash
    cd ./armor
    yarn setup
    ~~~
3. We use `Storybook` as a development environment. To run it for the `react` package just do the following: 
    ~~~bash
    cd ./packages/react
    yarn dev
    ~~~
4. Open [http://localhost:6006/](http://localhost:6006/) and start developing :)

### Local usage

You may want to try out the latest changes you made in some locally installed React application without bumping out anything to NPM.

You have two options here.

#### Option 1: yarn link or npm link

0. Make sure that no peer dependencies installed by typing
    ~~~bash
    cd packages/react;
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
* `feature branches` to develop separate features
* `dev` branch to contain several new features and test them together before making a release (this is the default branch)
* `master` branch to make releases

## Contribution rules

Contributing on regular basis is what really helps this project to advance. Any contributions you make are **greatly appreciated**.
The project tries to maintain healthy balance between comfortable development and restrictions that prevent everything from falling into chaos.
Therefore, there are certain rules a contributor must follow in order to make the process straightforward and error-proof.

Please check out our RFCs regarding:

* [Overall requirements and agreements](https://armor.deliveryhero.com/251886272/p/14086e-structure-and-qa)
* [API design requirements and agreements](https://armor.deliveryhero.com/251886272/p/9778eb-api-design)
* [Development lifecycle](https://armor.deliveryhero.com/251886272/p/1776e9-lifecycle/b/18200b)

We also try to support backward compatibility while making updates.

### Adding a new component

When it comes to a new component to be created, we have a code scaffolder. It creates a boilerplate with the desired structure, which can be really useful in the beginning.

We encourage contributors to try it out:

1. Go to `packages/react`.
2. Run `yarn scaffold` and answer a couple of questions.
3. Add `export * from './<component_name>';` to `src/components/index.js`
4. If the `Storybook` was running, then the story for the newly-created component should shortly appear

### Contribution steps and requirements

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
6. After the PR is accepted, do "Squash-and-merge" of the feature branch into the `dev` branch.

## Publishing

As soon as there are several features merged into `dev`, it is time to publish a new version. To do so:

1. Create a PR from `dev` to `master`, wait for linter and tests finish with their work.
2. Merge the PR with the following prefix in the name:
    1. add `fix:` prefix if the commits merged to `dev` had only `fix:` prefixes (this will increment `patch` version number),
    2. add `feat:` prefix if one of the commits merged to `dev` had `feat:` prefix (this will increment `minor` version number),
    3. add `BREAKING CHANGES` note into the commit name, if one of the commits merged into `dev` had `BREAKING CHANGES` in the name (this will increment `major` version number).

    ⚠️ Use of `feat:` and `fix:` prefixes together is not allowed.

    ⚠️ Please don't use "Squash and merge" or "Rebase" when merging changes from `dev` to `master` as it will make GitHub really confused.

3. As soon as the PR gets merged, [a new version will be published](https://github.com/deliveryhero/armor/packages/210156).
4. An updated version of the [documentation](https://deliveryhero.github.io/armor/) will be published as well.
5. There is no need to pull back the `master` branch locally after the CD process is done. In fact, you should not have the `master` branch locally at all.
6. The package version in `package.json` will not be updated and this is absolutely normal, because the remote version only matters.

⚠️ Please note that pushing directly to `master` or `dev` without making a PR is strictly prohibited.

## Contacts

 - [Sergei Gannochenko](sergei.gannochenko@deliveryhero.com)
 - [Nikolay Melnikov](nikolay.melnikov@deliveryhero.com)

### Built With

<details>
  <summary>Tools used in this module</summary>
  <p>&bull; <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a></p>
</details>
