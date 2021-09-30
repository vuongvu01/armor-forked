import { Badge } from '../../../src';
import * as Stories from './Badge.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Badge',
    component: Badge,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
