import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/LoginPage/__story__/LoginPage.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
