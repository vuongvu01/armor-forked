import { ExpansionIndicator } from '../../../src';
import * as Stories from './ExpansionIndicator.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'ExpansionIndicator',
    component: ExpansionIndicator,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
