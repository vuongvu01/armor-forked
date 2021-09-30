import { ConditionTag } from '../../../src';
import * as Stories from './ConditionTag.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'ConditionTag',
    component: ConditionTag,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
