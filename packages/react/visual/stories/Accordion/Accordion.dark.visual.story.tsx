import { Accordion } from '../../../src';
import * as Stories from './Accordion.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Accordion',
    component: Accordion,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
