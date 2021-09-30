import { ActionSheet } from '../../../src';
import * as Stories from './ActionSheet.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'ActionSheet',
    component: ActionSheet,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
