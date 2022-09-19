import React from 'react';

import { ConditionTag } from '../../../src/components/ConditionTag';

export default {
    title: 'ConditionTag',
    component: ConditionTag,
};

export const Default = () => {
    return <ConditionTag label="Role" value="Admin" margin={4} />;
};

export const MultipleConditions = () => {
    return (
        <>
            <ConditionTag
                label="Role"
                value={['Admin', 'HR', 'Manager']}
                margin={4}
                enableCloseIcon={false}
            />
            <ConditionTag
                label="Role"
                value={['Admin', 'HR', 'Manager', 'Employee', 'Boss']}
                margin={4}
                enableCloseIcon={false}
            />
        </>
    );
};
