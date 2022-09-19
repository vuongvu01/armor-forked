import React from 'react';
import { ConditionTag } from '../ConditionTag';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/ConditionTag',
    component: ConditionTag,
    decorators: [withWrapper],
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

export const DisabledCloseButton = () => {
    return (
        <ConditionTag
            label="Role"
            value="Admin"
            margin={4}
            enableCloseIcon={false}
        />
    );
};
