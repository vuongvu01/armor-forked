import { Radio } from '../../../src';
import * as Stories from './Radio.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Radio',
    component: Radio,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
