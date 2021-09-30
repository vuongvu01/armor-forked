import { Tag } from '../../../src';
import * as Stories from './Tag.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Tag',
    component: Tag,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
