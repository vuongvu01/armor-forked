import React from 'react';
import { ConditionTag } from '../ConditionTag';

export default {
    title: 'Components/ConditionTag',
    component: ConditionTag,
};

export const Default = () => {
    return <ConditionTag label="Role" value="Admin" margin={4} />;
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
