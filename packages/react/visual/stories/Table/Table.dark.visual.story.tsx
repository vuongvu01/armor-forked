import { Table } from '../../../src';
import * as Stories from './Table.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Table',
    component: Table,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
