import { Divider } from '../../../src';
import * as Stories from './Divider.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Divider',
    component: Divider,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
