import { Tooltip } from '../../../src';
import * as Stories from './Tooltip.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
