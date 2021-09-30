import { FilterLayout } from '../../../src';
import * as Stories from './Filter.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Filter',
    component: FilterLayout,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
