import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/SideSheet/__story__/SideSheet.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
