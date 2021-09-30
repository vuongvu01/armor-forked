import { List } from '../../../src';
import * as Stories from './List.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'List',
    component: List,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
