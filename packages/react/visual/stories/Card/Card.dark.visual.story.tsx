import { Card } from '../../../src';
import * as Stories from './Card.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Card',
    component: Card,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
