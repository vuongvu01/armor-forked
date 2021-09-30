import { FileUploadButton } from '../../../src';
import * as Stories from './FileUploadButton.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'FileUploadButton',
    component: FileUploadButton,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
