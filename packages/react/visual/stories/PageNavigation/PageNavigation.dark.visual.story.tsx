import { PageNavigation } from '../../../src';
import * as Stories from './PageNavigation.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'PageNavigation',
    component: PageNavigation,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
