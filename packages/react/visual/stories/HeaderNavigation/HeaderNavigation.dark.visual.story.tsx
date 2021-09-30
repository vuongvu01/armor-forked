import { HeaderNavigation } from '../../../src';
import * as Stories from './HeaderNavigation.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'HeaderNavigation',
    component: HeaderNavigation,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
