import { EmptyState } from '../../../src';
import * as Stories from './EmptyState.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'EmptyState',
    component: EmptyState,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
