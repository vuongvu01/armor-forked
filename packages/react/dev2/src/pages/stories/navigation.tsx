import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Navigation/__story__/Navigation.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
