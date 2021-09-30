import { Checkbox } from '../../../src';
import * as Stories from './Checkbox.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
