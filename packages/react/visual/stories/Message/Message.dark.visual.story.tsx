import { Message } from '../../../src';
import * as Stories from './Message.visual.story';

import { makeDarkStories } from '../../../src/helpers/makeDarkStories';

export default {
    title: 'Message',
    component: Message,
};

module.exports = {
    ...module.exports,
    ...makeDarkStories(Stories),
};
