import { SideSheet } from '../../../src';
import * as Stories from './SideSheet.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'SideSheet',
    component: SideSheet,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
