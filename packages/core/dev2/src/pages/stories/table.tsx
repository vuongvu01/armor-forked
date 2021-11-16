import React from 'react';

import { StoryPageLayout } from '../../components';
import * as Stories from '../../armor/components/Table/__story__/Table.dev.story';

export default () => {
    return <StoryPageLayout stories={Stories} />;
};
