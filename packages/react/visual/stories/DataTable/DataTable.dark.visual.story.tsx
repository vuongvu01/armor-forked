import { DataTable } from '../../../src';
import * as Stories from './DataTable.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'DataTable',
    component: DataTable,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
