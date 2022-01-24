import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Toast/__story__/Toast.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
