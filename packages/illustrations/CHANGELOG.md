# [1.5.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.4.3...@deliveryhero/armor-illustrations@1.5.0) (2022-07-28)


### Bug Fixes

* **Accordion:** fix animation when expanding/collapsing content ([#1101](https://github.com/deliveryhero/armor/issues/1101)) ([b1ab4bb](https://github.com/deliveryhero/armor/commit/b1ab4bb914391298f1dac3f744c88fd3996610e2))
* **Button:** when used as a link - disable state doesn't propagate [LD-456] ([#1107](https://github.com/deliveryhero/armor/issues/1107)) ([3a57b9d](https://github.com/deliveryhero/armor/commit/3a57b9dd2b120464d22f7eb6710aabddbc792fe5))
* **DatePicker:** Date picker month dropdown icon fix [LD-846] ([#1106](https://github.com/deliveryhero/armor/issues/1106)) ([3ecdfa9](https://github.com/deliveryhero/armor/commit/3ecdfa9b435b725e142f9e2932325b32e288d321))
* **DatePicker:** DateTime picker time reset on first try ([#1111](https://github.com/deliveryhero/armor/issues/1111)) ([d40dc03](https://github.com/deliveryhero/armor/commit/d40dc03bbea83e706c34ffffab1fce26f9eb67bb))
* **dropdown:** janky label [LD-337] ([#1138](https://github.com/deliveryhero/armor/issues/1138)) ([bcc5580](https://github.com/deliveryhero/armor/commit/bcc5580da48eca5069e0becf6ff753916737f9c5))
* **Dropdown:** Clear button is placed too far from the chevron [LD-845] ([#1105](https://github.com/deliveryhero/armor/issues/1105)) ([618e8a8](https://github.com/deliveryhero/armor/commit/618e8a870c9b05ad1726f37e6ae5ee3e80507ee1))
* **Dropdown:** ClearButton is not working properly [AR-141] ([#1121](https://github.com/deliveryhero/armor/issues/1121)) ([0e07e3d](https://github.com/deliveryhero/armor/commit/0e07e3de22c0ee79040bd821fe185102f3bdec31))
* **HeaderNavigation:** Dropdown of Navigation not the right width [AR-44] ([#1115](https://github.com/deliveryhero/armor/issues/1115)) ([cee8db5](https://github.com/deliveryhero/armor/commit/cee8db5d8ccdb699685a2a68d5efe2b4ccf2276f))
* **Navigation:** Navigation improvements [LD-436] ([#1110](https://github.com/deliveryhero/armor/issues/1110)) ([dad89d2](https://github.com/deliveryhero/armor/commit/dad89d22d40e73c883c2cbd528914bad67a89dda))
* **ops portal navigation:** post release fixes [LD-841] ([#1103](https://github.com/deliveryhero/armor/issues/1103)) ([3951c41](https://github.com/deliveryhero/armor/commit/3951c4118e3d3c4d46aff4c41eae02822451483a))
* **ProgressBar:** Transition for background when preset is changed dynamically ([#1065](https://github.com/deliveryhero/armor/issues/1065)) ([64bf02a](https://github.com/deliveryhero/armor/commit/64bf02a8a70f75289bb102875b82be10883a00ae))
* **skeleton:** safari issue ([#1109](https://github.com/deliveryhero/armor/issues/1109)) ([bcfa067](https://github.com/deliveryhero/armor/commit/bcfa067cbf329dadca0c85f94235dfb7477c4c08))
* **toast:** Multiple instances of useToast doesn't work well with each other [AR-129] ([b9273b3](https://github.com/deliveryhero/armor/commit/b9273b3a36418b9c6a1018ab3ddbdb181aa404d8))


### Features

* **DatePicker:** Add property yearRange ([#1102](https://github.com/deliveryhero/armor/issues/1102)) ([4869242](https://github.com/deliveryhero/armor/commit/48692421ad9836138d15b8fb9cff2e1931eb9355))
* **dropdown:** Allow render selected value as node [AR-140] ([416d1fa](https://github.com/deliveryhero/armor/commit/416d1fabdf34157f58253842e5310ed276ea5bdb))
* **Tag:** Add disabled state and improve visual regression testing [LD-287] ([#1140](https://github.com/deliveryhero/armor/issues/1140)) ([63b87ce](https://github.com/deliveryhero/armor/commit/63b87ce01fff47d3dd53bfa5545a62b47244f31b))

## [1.4.3](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.4.2...@deliveryhero/armor-illustrations@1.4.3) (2022-07-14)


### Bug Fixes

* **DataTable:** allow horizontalScroll ([#1088](https://github.com/deliveryhero/armor/issues/1088)) ([708f94a](https://github.com/deliveryhero/armor/commit/708f94abeeea090136fb245ef8a3788b3f41b1de))
* **DataTable:** support columns width, add classNames and add styled example [LD-842] ([#1099](https://github.com/deliveryhero/armor/issues/1099)) ([ef2562f](https://github.com/deliveryhero/armor/commit/ef2562f6c5b52a965a16ead1613f477bf65cc1c6))
* **icons:** fix the icon size inconsistencies [LD-813] ([#1070](https://github.com/deliveryhero/armor/issues/1070)) ([e3f92fe](https://github.com/deliveryhero/armor/commit/e3f92fe05141f81f5d3cb9f8ef9954d8e023cc3d))
* **Table:** Transparent fixed column in table on hover [AR-131] ([#1079](https://github.com/deliveryhero/armor/issues/1079)) ([2549809](https://github.com/deliveryhero/armor/commit/2549809bb11a9f4d678c72a91de902f4d47644ce))


### Features

* **ClearButton:** implement new clear button in several places [LD-649] ([#1098](https://github.com/deliveryhero/armor/issues/1098)) ([9e2f04e](https://github.com/deliveryhero/armor/commit/9e2f04e364dac904c21317ac7e9ac0c4a37ecb99)), closes [#1047](https://github.com/deliveryhero/armor/issues/1047)
* **new header navigation:** ops portal [LD-506] ([#1059](https://github.com/deliveryhero/armor/issues/1059)) ([8a1fd8d](https://github.com/deliveryhero/armor/commit/8a1fd8d4aac604756cca03211b8e7d2716b7c385))
* **props parser:** add support for reading extra components [LD-837] ([#1083](https://github.com/deliveryhero/armor/issues/1083)) ([97e3487](https://github.com/deliveryhero/armor/commit/97e348712bb8960169cb7f4938c1a4ab50a8959d))

## [1.4.2](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.4.1...@deliveryhero/armor-illustrations@1.4.2) (2022-07-04)


### Bug Fixes

* **datatable:** In DataTable the onRowSortOrderChange function is always called twice [AR-118] ([032b63b](https://github.com/deliveryhero/armor/commit/032b63b23ecacbc62049e05a462a55cd8a940f0a))
* **DatePicker:** When clicked on the calendar icon in the date picker component, the calendar does not open [AR-115] ([#1061](https://github.com/deliveryhero/armor/issues/1061)) ([3bd9e65](https://github.com/deliveryhero/armor/commit/3bd9e654db35a27e2c2f8c7c690d6b5ff987f131))
* **FileUploader:** FileUploader allow select same file [AR-108] ([b4163fe](https://github.com/deliveryhero/armor/commit/b4163fe161018ed47d1e55071b18129879f55b17))
* **filter:** fix cant select filter after clear all ([#1066](https://github.com/deliveryhero/armor/issues/1066)) ([b7830f6](https://github.com/deliveryhero/armor/commit/b7830f63abd45a37739be264b1af94f293fdd2b0))
* **IconButton:** IconButton does not support type prop and submit form [AR-123] ([#1063](https://github.com/deliveryhero/armor/issues/1063)) ([faefa68](https://github.com/deliveryhero/armor/commit/faefa68137bf11b17b7ce9ba1603d015991020aa))
* **Typography:** Typography component with medium variant does not match font-size [AR-124] ([#1064](https://github.com/deliveryhero/armor/issues/1064)) ([31b0ea6](https://github.com/deliveryhero/armor/commit/31b0ea6f940e5b0774e2a8ae64f51c1c1a92fb10))

## [1.4.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.4.0...@deliveryhero/armor-illustrations@1.4.1) (2022-06-28)


### Bug Fixes

* **DataTable:** Column config key should be considered as unique key for Data Table. [AR-103] ([#1046](https://github.com/deliveryhero/armor/issues/1046)) ([dfb7a21](https://github.com/deliveryhero/armor/commit/dfb7a218f905af0828e9f39ee03789f32d552fed))
* **Form:** Refining the Inactive Checkbox Component in Dark Theme [LD-535] ([#1054](https://github.com/deliveryhero/armor/issues/1054)) ([4ff6175](https://github.com/deliveryhero/armor/commit/4ff6175a7187ee0c110e786c67ae7ac526759caa))
* **Icon:** update play icon ([#1038](https://github.com/deliveryhero/armor/issues/1038)) ([cc54d74](https://github.com/deliveryhero/armor/commit/cc54d7479e8784cf7ceb8bdd2a1bce76632ca508))
* **Link:** The link component does not have the right font-weight defined [AR-102] ([#1048](https://github.com/deliveryhero/armor/issues/1048)) ([fe378c1](https://github.com/deliveryhero/armor/commit/fe378c1f2b41a9481d47503f20b78e05bc28ece7))
* **Tag:** fix type def ([#1041](https://github.com/deliveryhero/armor/issues/1041)) ([0cff4e8](https://github.com/deliveryhero/armor/commit/0cff4e88640d09e6b3f3e5a22ef2f117bade2c69))


### Features

* **DataTable:** Support row onClick event for DataTable [AR-101] ([268ce63](https://github.com/deliveryhero/armor/commit/268ce63efdc4fc37b3d56a08e2217556a35034db))
* **DatePicker:** request a highlight for Today date in date picker [AR-110] ([#1055](https://github.com/deliveryhero/armor/issues/1055)) ([53fe7e9](https://github.com/deliveryhero/armor/commit/53fe7e9ed08a825e4d78a0e818c8aab6e3c20616))
* **Icons:** add bunch of new icons ([#1032](https://github.com/deliveryhero/armor/issues/1032)) ([f622e7e](https://github.com/deliveryhero/armor/commit/f622e7e8052b66ea1874169c5fad68976719e380))
* **Tag:** create new tag variants  ([#1029](https://github.com/deliveryhero/armor/issues/1029)) ([4876f2d](https://github.com/deliveryhero/armor/commit/4876f2d9b3ff86c704a52e06b1712f3fae60f76e))

# [1.4.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.3.1...@deliveryhero/armor-illustrations@1.4.0) (2022-06-08)


### Bug Fixes

* **TextInput:** The `for` attribute is missing for TextInput [AR-95] ([#1020](https://github.com/deliveryhero/armor/issues/1020)) ([28a41c8](https://github.com/deliveryhero/armor/commit/28a41c8cf94240de14183f25f1914634e37378c8))
* **toast:** Fix useToast hook warning render method should be pure [AR-87] ([67c7df9](https://github.com/deliveryhero/armor/commit/67c7df9262ed8acf7ef4e48cb0530b2ef47ad9fd))


### Features

* **filter:** Clear All action should reset both places storage and UI fields [ar-70] ([d2e796d](https://github.com/deliveryhero/armor/commit/d2e796d2911b03d60ca24390255ba71a3a26a2ba))
* **illustration:** Wakaow! A new illustration has been requested [AR-93] ([#1012](https://github.com/deliveryhero/armor/issues/1012)) ([586fa89](https://github.com/deliveryhero/armor/commit/586fa89e14c955af0e16e8e70a7c703397eb4a81))
* **spacing mixin:** Spacing function API could be easier to use [LD-807] ([#1010](https://github.com/deliveryhero/armor/issues/1010)) ([ab1668a](https://github.com/deliveryhero/armor/commit/ab1668a53f87c8d1c28e5c4a35fe56b699ff8b81))

## [1.3.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.3.0...@deliveryhero/armor-illustrations@1.3.1) (2022-05-27)


### Bug Fixes

* **stepper:** change the step description wrapper and fix the messed up order ([#1005](https://github.com/deliveryhero/armor/issues/1005)) ([730ec96](https://github.com/deliveryhero/armor/commit/730ec965fbe0ee1844d08e0400ba9491f3617603))


### Features

* **tooltip:** support interactive tooltip as default [AR-57] ([a7b59ec](https://github.com/deliveryhero/armor/commit/a7b59ec6676305d5ef6503f1dd467aa8df922ad3))

# [1.3.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.5...@deliveryhero/armor-illustrations@1.3.0) (2022-05-27)


### Bug Fixes

* **switch:** Fix proptype ([#999](https://github.com/deliveryhero/armor/issues/999)) ([53e31f4](https://github.com/deliveryhero/armor/commit/53e31f47115c48211b89de9ca080b0bbc7e6fbb7))
* **Toast:** Passing onClose callback prevent Toaster from being closed [AR-89] ([#1000](https://github.com/deliveryhero/armor/issues/1000)) ([749e4be](https://github.com/deliveryhero/armor/commit/749e4beb2b78537b2e463dbbfc17ddb336d96976))
* **type:** Expose types for non-component props [AR-65] ([707613d](https://github.com/deliveryhero/armor/commit/707613d1114c88751da999aa30c5d8bbb8586b2a))


### Features

* **illustration:** new illustrations add and github workkflow ([#997](https://github.com/deliveryhero/armor/issues/997)) ([9770d77](https://github.com/deliveryhero/armor/commit/9770d778c91b974a2702284e896adefb52148183))

## [1.2.5](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.4...@deliveryhero/armor-illustrations@1.2.5) (2022-05-18)


### Bug Fixes

* **button & inputs:** Fix Button and inputs style mismatched [LD-789] ([f95f179](https://github.com/deliveryhero/armor/commit/f95f1796d1ee79d146134593edadf2d2151222b5))
* **dropdown:** Dropdown onChange event receives name argument in all cases [AR-84] ([a48338d](https://github.com/deliveryhero/armor/commit/a48338dd8f43c5809589e6d78cfaa859c85fb661))
* **dropdown:** Dropdown with Search functionality on focus always scroll the page to the top [AR-73] ([#994](https://github.com/deliveryhero/armor/issues/994)) ([18242c2](https://github.com/deliveryhero/armor/commit/18242c290273a7d9a934bdc03e8a4e839f6bd9f0))
* **IconButton:** Disabled prop on IconButton [AR-58] ([#965](https://github.com/deliveryhero/armor/issues/965)) ([1a1ec59](https://github.com/deliveryhero/armor/commit/1a1ec591b97f7e0ac3b8ed9265430f8b289bc453))
* **skeleton:** background colors are not consistent and image placeholder is out of sync [LD-724] ([#981](https://github.com/deliveryhero/armor/issues/981)) ([b4a1d41](https://github.com/deliveryhero/armor/commit/b4a1d41490c662f35e7c12b3d7a42835fcb6f506))
* **tooltip:** Sync Tooltip design between Figma and code [LD-791] ([2792211](https://github.com/deliveryhero/armor/commit/279221177963cc0cabb325f0d95ac2ab18033ec4))


### Features

* **codacy:** testing analysis[LD-755] ([#992](https://github.com/deliveryhero/armor/issues/992)) ([33ae909](https://github.com/deliveryhero/armor/commit/33ae90958a5a809f4b83c01b7980ac681ed87ddc))
* **icon:** add new translate icon [AR-76] ([#982](https://github.com/deliveryhero/armor/issues/982)) ([4dd23d0](https://github.com/deliveryhero/armor/commit/4dd23d00a482d1d2d08b783cdfea348b443a20e5))
* **powerup:** new components package ([#969](https://github.com/deliveryhero/armor/issues/969)) ([5853c14](https://github.com/deliveryhero/armor/commit/5853c1440e83aed8a7394431a4ec9cefbec28cec))

## [1.2.4](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.3...@deliveryhero/armor-illustrations@1.2.4) (2022-05-11)


### Bug Fixes

* **HeaderNavigation:** Select all options in HeaderNavigationSelector is not working [LD-729] ([#971](https://github.com/deliveryhero/armor/issues/971)) ([fb99739](https://github.com/deliveryhero/armor/commit/fb997396a65c662f25394568a314504da1c26d49))
* **preview:** fix preview env build ([#972](https://github.com/deliveryhero/armor/issues/972)) ([766d9f7](https://github.com/deliveryhero/armor/commit/766d9f702c3427a0912c79cb6451099c285c8c73))
* **spinner:** each spinner instance now have unique name ([#960](https://github.com/deliveryhero/armor/issues/960)) ([8eea60c](https://github.com/deliveryhero/armor/commit/8eea60c0173d2e4d6a4b411b4fe0202b190fa751))
* **theme:** Theme refactoring: map deprecated theme L2 tokens to the actual ones [LD-781] ([cc5ff2e](https://github.com/deliveryhero/armor/commit/cc5ff2e838264a08e60ca4552743006fe843f7a1))


### Features

* **icons:** Add new SMS icon [AR-72] ([#976](https://github.com/deliveryhero/armor/issues/976)) ([9f1bcc6](https://github.com/deliveryhero/armor/commit/9f1bcc63bdf3f20acb0aba72fd6ebc34bb9e562d))

## [1.2.3](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.2...@deliveryhero/armor-illustrations@1.2.3) (2022-04-25)


### Features

* **icons:** Add missing icons  [LD-779] ([f1a11e4](https://github.com/deliveryhero/armor/commit/f1a11e43d9574aa4d2ee7a9629d82d5274982802))

## @deliveryhero/armor-illustrations [1.2.2](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.1...@deliveryhero/armor-illustrations@1.2.2) (2022-04-19)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.6.1

## [1.2.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.2.0...@deliveryhero/armor-illustrations@1.2.1) (2022-03-28)


### Features

* **system:** new hook useDidUpdateEffect added ([#920](https://github.com/deliveryhero/armor/issues/920)) ([adb32bb](https://github.com/deliveryhero/armor/commit/adb32bb34ea723df835bd69f8b9d84567b541f13))

# [1.2.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.1.0...@deliveryhero/armor-illustrations@1.2.0) (2022-03-25)


### Bug Fixes

* **PageNavigation:** Inconsistency between pagination component; design and development [AR-54] ([4e76962](https://github.com/deliveryhero/armor/commit/4e76962ecc3781479468ec685e8a43b8e3bde0d9))
* **theme:** Typography minor fixes ([54c703f](https://github.com/deliveryhero/armor/commit/54c703f2a2b088433e238eac48f64666d66ab276))


### Features

* **illustrations:** add new illustrations [AR-53] ([f6d0824](https://github.com/deliveryhero/armor/commit/f6d082479a38ca29ef7a79007199a04aebfde490))

# [1.1.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.5...@deliveryhero/armor-illustrations@1.1.0) (2022-03-15)


### Bug Fixes

* **armor-docs:** Correct armor-vendors package dependencies ([00924a4](https://github.com/deliveryhero/armor/commit/00924a47c53f7d546c2118c2b38a954b71d9d1a2))
* **armor-docs:** update vendors package dependencies ([#907](https://github.com/deliveryhero/armor/issues/907)) ([c1451c8](https://github.com/deliveryhero/armor/commit/c1451c8d13a175e8069fa5aedeb28f6324ee48b8))
* **HeaderNavigation:** Header navigation component issue in rooster-dashboard [AR-47] ([d9ca07a](https://github.com/deliveryhero/armor/commit/d9ca07abd60ac58a7e945a62acd54317b41a8357))


### Features

* **HeaderNavigationSelector:** add scrolling effect to HeaderNavigationSelector [AR-35] ([447872b](https://github.com/deliveryhero/armor/commit/447872b14ab4ec9e4f1070f50cffd6ef2d92cce8))
* **stepper:** Stepper Component as a Log  [AR-22] ([b048572](https://github.com/deliveryhero/armor/commit/b048572a9c43c459b5f256520fe218d0861cd0c7))

## @deliveryhero/armor-illustrations [1.0.5](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.4...@deliveryhero/armor-illustrations@1.0.5) (2022-03-01)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.4.0

## @deliveryhero/armor-illustrations [1.0.4](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.3...@deliveryhero/armor-illustrations@1.0.4) (2022-02-22)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.3.0

## @deliveryhero/armor-illustrations [1.0.3](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.2...@deliveryhero/armor-illustrations@1.0.3) (2022-02-09)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.2.2

## @deliveryhero/armor-illustrations [1.0.2](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.1...@deliveryhero/armor-illustrations@1.0.2) (2022-02-01)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.2.1

## @deliveryhero/armor-illustrations [1.0.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-illustrations@1.0.0...@deliveryhero/armor-illustrations@1.0.1) (2022-01-25)





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.2.0

# @deliveryhero/armor-illustrations 1.0.0 (2022-01-25)


### Features

* **illustration-package:** new sub package[LD-561] ([#845](https://github.com/deliveryhero/armor/issues/845)) ([6b0e366](https://github.com/deliveryhero/armor/commit/6b0e366c4f671337b95ab7c6393dc1345855ba27))





### Dependencies

* **@deliveryhero/armor-system:** upgraded to 1.2.0
