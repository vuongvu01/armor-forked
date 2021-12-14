import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Button/__story__/Button.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
