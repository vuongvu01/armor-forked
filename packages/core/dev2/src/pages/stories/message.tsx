import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Message/__story__/Message.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
