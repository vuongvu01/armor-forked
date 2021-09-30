import { Button } from '../../../src';
import * as Stories from './Button.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Button',
    component: Button,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
