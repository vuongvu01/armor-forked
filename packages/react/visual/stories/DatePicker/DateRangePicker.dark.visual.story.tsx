import { DateRangePicker } from '../../../src';
import * as Stories from './DateRangePicker.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'DateRangePicker',
    component: DateRangePicker,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
