import { Typography } from '../../../src';
import * as Stories from './Typography.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Typography',
    component: Typography,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
