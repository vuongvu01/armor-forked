import { Dropdown } from '../../../src';
import * as Stories from './Dropdown.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
