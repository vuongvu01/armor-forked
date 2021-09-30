import { Search } from '../../../src';
import * as Stories from './Search.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Search',
    component: Search,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
