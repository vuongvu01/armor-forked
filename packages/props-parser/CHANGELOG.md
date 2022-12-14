# [1.4.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.3.1...@deliveryhero/armor-props-parser@1.4.0) (2022-07-11)


### Bug Fixes

* **armor-docs:** Correct armor-vendors package dependencies ([00924a4](https://github.com/deliveryhero/armor/commit/00924a47c53f7d546c2118c2b38a954b71d9d1a2))
* **armor-docs:** update vendors package dependencies ([#907](https://github.com/deliveryhero/armor/issues/907)) ([c1451c8](https://github.com/deliveryhero/armor/commit/c1451c8d13a175e8069fa5aedeb28f6324ee48b8))
* **button & inputs:** Fix Button and inputs style mismatched [LD-789] ([f95f179](https://github.com/deliveryhero/armor/commit/f95f1796d1ee79d146134593edadf2d2151222b5))
* **checkbox:** Update checkbox icons [AR-27] ([37788b7](https://github.com/deliveryhero/armor/commit/37788b77bdcefcca03fc3bd7084a5f59ca116a74))
* **datatable:** In DataTable the onRowSortOrderChange function is always called twice [AR-118] ([032b63b](https://github.com/deliveryhero/armor/commit/032b63b23ecacbc62049e05a462a55cd8a940f0a))
* **DataTable:** Column config key should be considered as unique key for Data Table. [AR-103] ([#1046](https://github.com/deliveryhero/armor/issues/1046)) ([dfb7a21](https://github.com/deliveryhero/armor/commit/dfb7a218f905af0828e9f39ee03789f32d552fed))
* **DatePicker:** When clicked on the calendar icon in the date picker component, the calendar does not open [AR-115] ([#1061](https://github.com/deliveryhero/armor/issues/1061)) ([3bd9e65](https://github.com/deliveryhero/armor/commit/3bd9e654db35a27e2c2f8c7c690d6b5ff987f131))
* **daterangepicker:** DateRangePicker enableOnChangeOnSingleClick property implemented [AR-28] ([8b5f388](https://github.com/deliveryhero/armor/commit/8b5f3886c0cb86e7d575ec481351ff66f514f7bd))
* **dev2:** fix dev2 side view ([#926](https://github.com/deliveryhero/armor/issues/926)) ([34921af](https://github.com/deliveryhero/armor/commit/34921af5c895ce961f53029a29b3db8407a3154e))
* **dropdown:** Dropdown onChange event receives name argument in all cases [AR-84] ([a48338d](https://github.com/deliveryhero/armor/commit/a48338dd8f43c5809589e6d78cfaa859c85fb661))
* **dropdown:** Dropdown with Search functionality on focus always scroll the page to the top [AR-73] ([#994](https://github.com/deliveryhero/armor/issues/994)) ([18242c2](https://github.com/deliveryhero/armor/commit/18242c290273a7d9a934bdc03e8a4e839f6bd9f0))
* **dropdown:** Fix Dropdown to support custom option label [AR-62] ([2e8a898](https://github.com/deliveryhero/armor/commit/2e8a8986a6aec9feba68b672b2402e903bd03f3c))
* **dropdown:** options.label prop-type ([#796](https://github.com/deliveryhero/armor/issues/796)) ([e862752](https://github.com/deliveryhero/armor/commit/e862752e31003c21452c9b383c713c80967db9de))
* **dropdown:** Typing error in Dropdown [AR-38] ([7841da6](https://github.com/deliveryhero/armor/commit/7841da699ec20fdc7a7dc821804756f2e589d937))
* **dropdown:** Update in the Dropdown component, dropdown always fits with the input field [AR-29] ([67d5f9e](https://github.com/deliveryhero/armor/commit/67d5f9eaac378bd80de36ccf6388260d0d17839e))
* **FileUploader:** FileUploader allow select same file [AR-108] ([b4163fe](https://github.com/deliveryhero/armor/commit/b4163fe161018ed47d1e55071b18129879f55b17))
* **filter:** fix cant select filter after clear all ([#1066](https://github.com/deliveryhero/armor/issues/1066)) ([b7830f6](https://github.com/deliveryhero/armor/commit/b7830f63abd45a37739be264b1af94f293fdd2b0))
* **Form:** Refining the Inactive Checkbox Component in Dark Theme [LD-535] ([#1054](https://github.com/deliveryhero/armor/issues/1054)) ([4ff6175](https://github.com/deliveryhero/armor/commit/4ff6175a7187ee0c110e786c67ae7ac526759caa))
* **HeaderNavigation:** Header navigation component issue in rooster-dashboard [AR-47] ([d9ca07a](https://github.com/deliveryhero/armor/commit/d9ca07abd60ac58a7e945a62acd54317b41a8357))
* **HeaderNavigation:** Select all options in HeaderNavigationSelector is not working [LD-729] ([#971](https://github.com/deliveryhero/armor/issues/971)) ([fb99739](https://github.com/deliveryhero/armor/commit/fb997396a65c662f25394568a314504da1c26d49))
* **HeaderNavigationSelector:** Update HeaderNavigationSelector to support search filter [AR-32] ([755577b](https://github.com/deliveryhero/armor/commit/755577b8f92b1fcc0e4ce26fb9ee776f177fd01b))
* **Icon:** update play icon ([#1038](https://github.com/deliveryhero/armor/issues/1038)) ([cc54d74](https://github.com/deliveryhero/armor/commit/cc54d7479e8784cf7ceb8bdd2a1bce76632ca508))
* **IconButton:** Disabled prop on IconButton [AR-58] ([#965](https://github.com/deliveryhero/armor/issues/965)) ([1a1ec59](https://github.com/deliveryhero/armor/commit/1a1ec591b97f7e0ac3b8ed9265430f8b289bc453))
* **IconButton:** IconButton does not support type prop and submit form [AR-123] ([#1063](https://github.com/deliveryhero/armor/issues/1063)) ([faefa68](https://github.com/deliveryhero/armor/commit/faefa68137bf11b17b7ce9ba1603d015991020aa))
* **icons:** Fix icons are not center aligned [LD-731] ([ca13e5d](https://github.com/deliveryhero/armor/commit/ca13e5db7008a1a2321a7883c799fa50833b5598))
* **icons:** update visual tests regarding to the icons change ([#948](https://github.com/deliveryhero/armor/issues/948)) ([6df99cc](https://github.com/deliveryhero/armor/commit/6df99cc6a90e60981405676fa90eb667f165e2b4))
* **Link:** The link component does not have the right font-weight defined [AR-102] ([#1048](https://github.com/deliveryhero/armor/issues/1048)) ([fe378c1](https://github.com/deliveryhero/armor/commit/fe378c1f2b41a9481d47503f20b78e05bc28ece7))
* **LoginPage:** LoginPage faulty API design [LD-734] ([7ef26ac](https://github.com/deliveryhero/armor/commit/7ef26acad4e7f53ad1e626fc375b0dd63a90d480))
* **PageNavigation:** Inconsistency between pagination component; design and development [AR-54] ([4e76962](https://github.com/deliveryhero/armor/commit/4e76962ecc3781479468ec685e8a43b8e3bde0d9))
* **preview:** fix preview env build ([#972](https://github.com/deliveryhero/armor/issues/972)) ([766d9f7](https://github.com/deliveryhero/armor/commit/766d9f702c3427a0912c79cb6451099c285c8c73))
* **publish:** added build step for motion publish ([#897](https://github.com/deliveryhero/armor/issues/897)) ([c24f512](https://github.com/deliveryhero/armor/commit/c24f5125f23cae093f99ed503b224ffac417864e))
* **search:** Search accessibility improvements [LD-555] ([57837b1](https://github.com/deliveryhero/armor/commit/57837b17a7cc4457f8eb0338f9296d1de455f085))
* **skeleton:** background colors are not consistent and image placeholder is out of sync [LD-724] ([#981](https://github.com/deliveryhero/armor/issues/981)) ([b4a1d41](https://github.com/deliveryhero/armor/commit/b4a1d41490c662f35e7c12b3d7a42835fcb6f506))
* **spinner:** each spinner instance now have unique name ([#960](https://github.com/deliveryhero/armor/issues/960)) ([8eea60c](https://github.com/deliveryhero/armor/commit/8eea60c0173d2e4d6a4b411b4fe0202b190fa751))
* **stepper:** change the step description wrapper and fix the messed up order ([#1005](https://github.com/deliveryhero/armor/issues/1005)) ([730ec96](https://github.com/deliveryhero/armor/commit/730ec965fbe0ee1844d08e0400ba9491f3617603))
* **switch:** Fix proptype ([#999](https://github.com/deliveryhero/armor/issues/999)) ([53e31f4](https://github.com/deliveryhero/armor/commit/53e31f47115c48211b89de9ca080b0bbc7e6fbb7))
* **Table:** Transparent fixed column in table on hover [AR-131] ([#1079](https://github.com/deliveryhero/armor/issues/1079)) ([2549809](https://github.com/deliveryhero/armor/commit/2549809bb11a9f4d678c72a91de902f4d47644ce))
* **Tag:** fix type def ([#1041](https://github.com/deliveryhero/armor/issues/1041)) ([0cff4e8](https://github.com/deliveryhero/armor/commit/0cff4e88640d09e6b3f3e5a22ef2f117bade2c69))
* **TextInput:** The `for` attribute is missing for TextInput [AR-95] ([#1020](https://github.com/deliveryhero/armor/issues/1020)) ([28a41c8](https://github.com/deliveryhero/armor/commit/28a41c8cf94240de14183f25f1914634e37378c8))
* **theme:** Performance optimisations related to theming [LD-726] ([d3962d0](https://github.com/deliveryhero/armor/commit/d3962d0988c5a7b1e546af0946ac07ec5786571c))
* **theme:** Theme refactoring: map deprecated theme L2 tokens to the actual ones [LD-781] ([cc5ff2e](https://github.com/deliveryhero/armor/commit/cc5ff2e838264a08e60ca4552743006fe843f7a1))
* **theme:** Typography minor fixes ([54c703f](https://github.com/deliveryhero/armor/commit/54c703f2a2b088433e238eac48f64666d66ab276))
* **toast:** Fix useToast hook warning render method should be pure [AR-87] ([67c7df9](https://github.com/deliveryhero/armor/commit/67c7df9262ed8acf7ef4e48cb0530b2ef47ad9fd))
* **Toast:** Passing onClose callback prevent Toaster from being closed [AR-89] ([#1000](https://github.com/deliveryhero/armor/issues/1000)) ([749e4be](https://github.com/deliveryhero/armor/commit/749e4beb2b78537b2e463dbbfc17ddb336d96976))
* **tooltip:** Sync Tooltip design between Figma and code [LD-791] ([2792211](https://github.com/deliveryhero/armor/commit/279221177963cc0cabb325f0d95ac2ab18033ec4))
* **type:** Expose types for non-component props [AR-65] ([707613d](https://github.com/deliveryhero/armor/commit/707613d1114c88751da999aa30c5d8bbb8586b2a))
* **Typography:** Typography component with medium variant does not match font-size [AR-124] ([#1064](https://github.com/deliveryhero/armor/issues/1064)) ([31b0ea6](https://github.com/deliveryhero/armor/commit/31b0ea6f940e5b0774e2a8ae64f51c1c1a92fb10))


### Features

* **armor-motion:** animation package ([#880](https://github.com/deliveryhero/armor/issues/880)) ([b5b642e](https://github.com/deliveryhero/armor/commit/b5b642e6ee9ab47862b7e35439fe021b40b90781))
* **buttons:** updated pressed,active and disabled state for buttons [LD-630] ([#815](https://github.com/deliveryhero/armor/issues/815)) ([4efef1b](https://github.com/deliveryhero/armor/commit/4efef1bc7de1b6bcf36807f8a71654f845de20c9))
* **codacy:** testing analysis[LD-755] ([#992](https://github.com/deliveryhero/armor/issues/992)) ([33ae909](https://github.com/deliveryhero/armor/commit/33ae90958a5a809f4b83c01b7980ac681ed87ddc))
* **content-switcher:** new component[LD-546] ([#833](https://github.com/deliveryhero/armor/issues/833)) ([b88af53](https://github.com/deliveryhero/armor/commit/b88af5394f10b80c556b196feb27109f6651472b))
* **data-table:** implement row reordering through drag and drop ([#814](https://github.com/deliveryhero/armor/issues/814)) ([9b39d35](https://github.com/deliveryhero/armor/commit/9b39d35a4e554780cc4807902147be4a03f73103))
* **DataTable:** Support row onClick event for DataTable [AR-101] ([268ce63](https://github.com/deliveryhero/armor/commit/268ce63efdc4fc37b3d56a08e2217556a35034db))
* **datepicker:** mask input ([#954](https://github.com/deliveryhero/armor/issues/954)) ([03b9a76](https://github.com/deliveryhero/armor/commit/03b9a76ad4a73db47066d03f9baf7c926bd778a2))
* **DatePicker:** request a highlight for Today date in date picker [AR-110] ([#1055](https://github.com/deliveryhero/armor/issues/1055)) ([53fe7e9](https://github.com/deliveryhero/armor/commit/53fe7e9ed08a825e4d78a0e818c8aab6e3c20616))
* **fileuploader:** add FileCard component [LD-508] ([#819](https://github.com/deliveryhero/armor/issues/819)) ([74b440a](https://github.com/deliveryhero/armor/commit/74b440ab091e9c9e5ee10c87d05ca466d6ed1388))
* **FileUploader:** Add FileUploader component [LD-508] ([10c2db7](https://github.com/deliveryhero/armor/commit/10c2db71bf3e839c22b34dc2822502ffe5a83bd3))
* **filter:** Clear All action should reset both places storage and UI fields [ar-70] ([d2e796d](https://github.com/deliveryhero/armor/commit/d2e796d2911b03d60ca24390255ba71a3a26a2ba))
* **HeaderNavigationSelector:** add scrolling effect to HeaderNavigationSelector [AR-35] ([447872b](https://github.com/deliveryhero/armor/commit/447872b14ab4ec9e4f1070f50cffd6ef2d92cce8))
* **icon:** add new translate icon [AR-76] ([#982](https://github.com/deliveryhero/armor/issues/982)) ([4dd23d0](https://github.com/deliveryhero/armor/commit/4dd23d00a482d1d2d08b783cdfea348b443a20e5))
* **icons:** Add missing icons  [LD-779] ([f1a11e4](https://github.com/deliveryhero/armor/commit/f1a11e43d9574aa4d2ee7a9629d82d5274982802))
* **icons:** Add new SMS icon [AR-72] ([#976](https://github.com/deliveryhero/armor/issues/976)) ([9f1bcc6](https://github.com/deliveryhero/armor/commit/9f1bcc63bdf3f20acb0aba72fd6ebc34bb9e562d))
* **Icons:** add bunch of new icons ([#1032](https://github.com/deliveryhero/armor/issues/1032)) ([f622e7e](https://github.com/deliveryhero/armor/commit/f622e7e8052b66ea1874169c5fad68976719e380))
* **illustration:** new illustrations add and github workkflow ([#997](https://github.com/deliveryhero/armor/issues/997)) ([9770d77](https://github.com/deliveryhero/armor/commit/9770d778c91b974a2702284e896adefb52148183))
* **illustration:** Wakaow! A new illustration has been requested [AR-93] ([#1012](https://github.com/deliveryhero/armor/issues/1012)) ([586fa89](https://github.com/deliveryhero/armor/commit/586fa89e14c955af0e16e8e70a7c703397eb4a81))
* **illustration-package:** new sub package[LD-561] ([#845](https://github.com/deliveryhero/armor/issues/845)) ([6b0e366](https://github.com/deliveryhero/armor/commit/6b0e366c4f671337b95ab7c6393dc1345855ba27))
* **illustrations:** add new illustrations [AR-53] ([f6d0824](https://github.com/deliveryhero/armor/commit/f6d082479a38ca29ef7a79007199a04aebfde490))
* **new header navigation:** ops portal [LD-506] ([#1059](https://github.com/deliveryhero/armor/issues/1059)) ([8a1fd8d](https://github.com/deliveryhero/armor/commit/8a1fd8d4aac604756cca03211b8e7d2716b7c385))
* **powerup:** new components package ([#969](https://github.com/deliveryhero/armor/issues/969)) ([5853c14](https://github.com/deliveryhero/armor/commit/5853c1440e83aed8a7394431a4ec9cefbec28cec))
* **props parser:** add support for reading extra components [LD-837] ([#1083](https://github.com/deliveryhero/armor/issues/1083)) ([97e3487](https://github.com/deliveryhero/armor/commit/97e348712bb8960169cb7f4938c1a4ab50a8959d))
* **spacing mixin:** Spacing function API could be easier to use [LD-807] ([#1010](https://github.com/deliveryhero/armor/issues/1010)) ([ab1668a](https://github.com/deliveryhero/armor/commit/ab1668a53f87c8d1c28e5c4a35fe56b699ff8b81))
* **stepper:** Stepper Component as a Log  [AR-22] ([b048572](https://github.com/deliveryhero/armor/commit/b048572a9c43c459b5f256520fe218d0861cd0c7))
* **system:** new hook useDidUpdateEffect added ([#920](https://github.com/deliveryhero/armor/issues/920)) ([adb32bb](https://github.com/deliveryhero/armor/commit/adb32bb34ea723df835bd69f8b9d84567b541f13))
* **Tag:** create new tag variants  ([#1029](https://github.com/deliveryhero/armor/issues/1029)) ([4876f2d](https://github.com/deliveryhero/armor/commit/4876f2d9b3ff86c704a52e06b1712f3fae60f76e))
* **toast:** Add toast component [LD-430] ([c1ff5e8](https://github.com/deliveryhero/armor/commit/c1ff5e857870e8939a6b73c9c7195c7ffde064dd))
* **tooltip:** support interactive tooltip as default [AR-57] ([a7b59ec](https://github.com/deliveryhero/armor/commit/a7b59ec6676305d5ef6503f1dd467aa8df922ad3))
* **vendor:** updated illustration in vendor[LD-547] ([#849](https://github.com/deliveryhero/armor/issues/849)) ([642bbd2](https://github.com/deliveryhero/armor/commit/642bbd20bbeca0a688d5580b20cb7971907a3774))

## [1.3.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.3.0...@deliveryhero/armor-props-parser@1.3.1) (2021-12-16)


### Bug Fixes

* **props-parser:** Props-parser updated to be able to process new file structure ([7a07033](https://github.com/deliveryhero/armor/commit/7a07033f34ddc315c1480b991448e9c8178c2265))
* ESLint rules of hooks plugin swiched from warning to error, complaints resolved ([1f812fa](https://github.com/deliveryhero/armor/commit/1f812fa52743472c5e7738ba6993dcbf3cad5e1a))
* **button:** dev example was missing ([#812](https://github.com/deliveryhero/armor/issues/812)) ([a31d3da](https://github.com/deliveryhero/armor/commit/a31d3da04e9403150909f18e2bc787fecf827c74))
* **dropdown:** issues with dark theme [AR-15] ([#790](https://github.com/deliveryhero/armor/issues/790)) ([316b0d9](https://github.com/deliveryhero/armor/commit/316b0d966f2d8d14202a59a8d4e7c977c76dd561))
* **dropdown component:** Fix Dropdown grouped options [LD-597] ([ade45f6](https://github.com/deliveryhero/armor/commit/ade45f6763b8564f69c6f070116810a4c8b8f8b4))
* **header:** remove redundant header background color [LD-462] ([3c4f327](https://github.com/deliveryhero/armor/commit/3c4f3272481168aa2e1cb4e1f071ee2f350e527a))
* **lint:** logistics-eslint-config as dev dep [LD-000] ([#804](https://github.com/deliveryhero/armor/issues/804)) ([071426d](https://github.com/deliveryhero/armor/commit/071426d90811570d07c83d03678e63f9481814c9))
* **loginpage:** height to scale to 100% of the parent [LD-669] ([#806](https://github.com/deliveryhero/armor/issues/806)) ([16c5856](https://github.com/deliveryhero/armor/commit/16c585633f1a79035ea95aa0535419b04fb54e3f))
* **tag component:** add filled state for Tag component [LD-614] ([e139d9e](https://github.com/deliveryhero/armor/commit/e139d9e1d9d2601b3b3afd3067f94c7c2af23849))


### Features

* **datepicker:** DateRangePicker, DatePicker: API improvements: isDateAllowed, freeDateRanges, isDateFree, today button, close on select, clear selection  [LD-545] ([135a927](https://github.com/deliveryhero/armor/commit/135a92743ada5bc01d14bebc5becff47694847ba))
* **datepicker:** Enable "Todays date" to be chosen by default on date selector in calendar component [AR-13] ([#791](https://github.com/deliveryhero/armor/issues/791)) ([45df7a5](https://github.com/deliveryhero/armor/commit/45df7a591a68ba53a5353e7e4c0ea1eff6753826))
* **icon:** IdeaStrategy icon added [AR-16] ([866a72e](https://github.com/deliveryhero/armor/commit/866a72edd67faa59eebcf08756463c7c7e54f6e4))
* **icons:** DefaultSort and Dollar icons added [AR-18] ([dcfa839](https://github.com/deliveryhero/armor/commit/dcfa8399a72f2f4ea6401b1997770e78aaebfe62))

# @deliveryhero/armor-props-parser [1.3.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.2.0...@deliveryhero/armor-props-parser@1.3.0) (2021-11-22)

# @deliveryhero/armor-props-parser [1.2.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.1.2...@deliveryhero/armor-props-parser@1.2.0) (2021-09-06)


### Features

* **docs:** Property parser tuple node traverse, DatePicker examples ([#709](https://github.com/deliveryhero/armor/issues/709)) ([d9f3efb](https://github.com/deliveryhero/armor/commit/d9f3efbdbb43225161c80f3c03fc7a59410ae16e))
* **dropdown:** Support for grouped selection in Dropdown [LD-528] ([#640](https://github.com/deliveryhero/armor/issues/640)) ([627a6c9](https://github.com/deliveryhero/armor/commit/627a6c915061398509a5bd863edd632b273aa858))

## @deliveryhero/armor-props-parser [1.1.2](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.1.1...@deliveryhero/armor-props-parser@1.1.2) (2021-08-30)


### Bug Fixes

* **props-parser:** Props Parser stats introduced ([#698](https://github.com/deliveryhero/armor/issues/698)) ([cf89d0f](https://github.com/deliveryhero/armor/commit/cf89d0f62d14a823e5349461268748e0c07d3825))

## @deliveryhero/armor-props-parser [1.1.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.1.0...@deliveryhero/armor-props-parser@1.1.1) (2021-08-30)


### Bug Fixes

* **property-parser:** Property parser minor fixes and improvements ([#696](https://github.com/deliveryhero/armor/issues/696)) ([f0b448f](https://github.com/deliveryhero/armor/commit/f0b448f4b971361dae75aa1a31b6e0c1d64371ec))

# @deliveryhero/armor-props-parser [1.1.0](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.0.1...@deliveryhero/armor-props-parser@1.1.0) (2021-08-27)

## @deliveryhero/armor-props-parser [1.0.1](https://github.com/deliveryhero/armor/compare/@deliveryhero/armor-props-parser@1.0.0...@deliveryhero/armor-props-parser@1.0.1) (2021-08-24)


### Bug Fixes

* parser quick fix ([c872bd6](https://github.com/deliveryhero/armor/commit/c872bd60c9ce8128ad0f5f4c92ebadb9cc26c758))
* parser quick fix x2 ([a54a6f6](https://github.com/deliveryhero/armor/commit/a54a6f6414248c35e3fc28a2a974188caf1fc900))

# @deliveryhero/armor-props-parser 1.0.0 (2021-08-24)
