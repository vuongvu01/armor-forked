import { Skeleton } from '../../../src';
import * as Stories from './Accordion.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Skeleton',
    component: Skeleton,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
