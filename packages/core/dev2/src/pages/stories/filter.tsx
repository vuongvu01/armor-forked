import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Filter/__story__/Filter.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
