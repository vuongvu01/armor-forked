import { MenuElement } from '../../../src';
import * as Stories from './MenuElement.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'MenuElement',
    component: MenuElement,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
