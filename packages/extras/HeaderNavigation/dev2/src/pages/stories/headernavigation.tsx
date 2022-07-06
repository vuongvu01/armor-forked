import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/HeaderNavigation/__story__/HeaderNavigation.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} containerMaxWidth="xl" />;
};
