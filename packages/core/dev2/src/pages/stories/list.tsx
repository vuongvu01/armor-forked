import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/List/__story__/List.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
