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

export const StatusTypeApproved = () => <Tag type="approved" />;

export const StatusTypeDenied = () => <Tag type="denied" />;

export const StatusTypeNew = () => <Tag type="new" />;
