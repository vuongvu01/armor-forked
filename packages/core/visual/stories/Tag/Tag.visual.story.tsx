import React from 'react';

import { Tag } from '../../../src/components/Tag';

export default {
    title: 'Tag',
    component: Tag,
};

export const UserTypeDefault = () => <Tag label="Default" />;

export const UserTypeDeleteEnabled = () => (
    <Tag label="Default" deleteOption="enabled" />
);

export const UserTypeDeleteDisabled = () => (
    <Tag label="Default" deleteOption="disabled" />
);

export const UserTypeDeleteEnabledSmall = () => (
    <Tag label="Default" deleteOption="enabled" small />
);

export const UserTypeDeleteDisabledSmall = () => (
    <Tag label="Default" deleteOption="disabled" small />
);

export const StatusTypeApproved = () => <Tag type="approved" />;

export const StatusTypeDenied = () => <Tag type="denied" />;

export const StatusTypeNew = () => <Tag type="new" />;

export const StatusTypeApprovedSmall = () => <Tag type="approved" small />;

export const StatusTypeDeniedSmall = () => <Tag type="denied" small />;

export const StatusTypeNewSmall = () => <Tag type="new" small />;

export const CustomStatusTypeApproved = () => (
    <Tag type="approved">Custom approved</Tag>
);

export const CustomStatusTypeDenied = () => (
    <Tag type="denied">Custom denied</Tag>
);

export const CustomStatusTypeNew = () => <Tag type="new">Custom new</Tag>;

export const TagWithZero = () => {
    return <Tag>{0}</Tag>;
};

export const TagWithFilledState = () => {
    return <Tag label="Default" deleteOption="disabled" filled />;
};
