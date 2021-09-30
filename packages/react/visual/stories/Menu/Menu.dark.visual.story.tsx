import { Menu } from '../../../src';
import * as Stories from './Menu.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Menu',
    component: Menu,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
