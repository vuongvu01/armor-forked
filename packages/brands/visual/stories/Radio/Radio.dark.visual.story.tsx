import { makeDarkTheme } from '../../../src';
import { makeStories } from '../../../src/utils/makeStories';

import * as Stories from './Radio';

module.exports = {
    ...module.exports,
    ...makeStories(Stories, makeDarkTheme),
};
