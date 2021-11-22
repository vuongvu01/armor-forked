import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/DataTable/__story__/DataTable.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
