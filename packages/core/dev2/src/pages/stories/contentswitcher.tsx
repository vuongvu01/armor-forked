import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/ContentSwitcher/__story__/ContentSwitcher.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
