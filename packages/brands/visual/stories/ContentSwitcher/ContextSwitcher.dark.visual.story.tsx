import { makeDarkTheme } from '../../../src';
import { makeStories } from '../../../src/utils/makeStories';

import * as Stories from './ContextSwitcher';

module.exports = {
    ...module.exports,
    ...makeStories(Stories, makeDarkTheme),
};
