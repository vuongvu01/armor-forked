import { IconButton } from '../../../src';
import * as Stories from './IconButton.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'IconButton',
    component: IconButton,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
