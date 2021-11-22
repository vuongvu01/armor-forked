import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/EmptyState/__story__/EmptyState.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
