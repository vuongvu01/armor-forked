import { Navigation } from '../../../src';
import * as Stories from './Navigation.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Navigation',
    component: Navigation,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
