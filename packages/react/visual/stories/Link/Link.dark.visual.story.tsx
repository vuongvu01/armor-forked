import { Link } from '../../../src';
import * as Stories from './Link.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Link',
    component: Link,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
