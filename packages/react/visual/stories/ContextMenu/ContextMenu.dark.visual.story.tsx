import { ContextMenu } from '../../../src';
import * as Stories from './ContextMenu.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'ContextMenu',
    component: ContextMenu,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
