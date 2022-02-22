import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/FileCard/__story__/FileCard.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
