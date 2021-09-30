import { Switch } from '../../../src';
import * as Stories from './Switch.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Switch',
    component: Switch,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
