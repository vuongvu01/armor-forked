import React from 'react';

import { ConditionTag } from '../../../src/components/ConditionTag';

export default {
    title: 'ConditionTag',
    component: ConditionTag,
};

export const Default = () => {
    return <ConditionTag label="Role" value="Admin" margin={4} />;
};
