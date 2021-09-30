import { TextInput } from '../../../src';
import * as Stories from './TextInput.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'TextInput',
    component: TextInput,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
