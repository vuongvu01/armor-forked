import { Dialog } from '../../../src';
import * as Stories from './Dialog.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Dialog',
    component: Dialog,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
