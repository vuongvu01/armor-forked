import { DatePicker } from '../../../src';
import * as Stories from './DatePicker.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
