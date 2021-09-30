import { Tabs } from '../../../src';
import * as Stories from './Tabs.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Tabs',
    component: Tabs,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
