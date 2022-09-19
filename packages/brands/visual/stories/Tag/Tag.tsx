import React from 'react';
import { Tag } from '@deliveryhero/armor';
import { IconPlaceholderIcon } from '@deliveryhero/armor-icons';

export default {
    title: 'Tag',
    component: Tag,
};

export const UserTypeDefault = () => <Tag label="Default" />;

export const UserTypeDeleteEnabled = () => (
    <Tag label="Default" deleteOption="enabled" />
);

export const UserTypeDeleteDisabled = () => <Tag label="Default" />;

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

export const CustomStatusTypeOnHold = () => <Tag type="on-hold">Hold</Tag>;

export const StatusTagIndicator = () => (
    <Tag type="on-hold" indicator="99">
        Indicate
    </Tag>
);

export const TagWithZero = () => {
    return <Tag>{0}</Tag>;
};

export const TagWithFilledState = () => {
    return <Tag label="Default" deleteOption="disabled" filled />;
};

export const TagWithFilledStateDisabled = () => {
    return <Tag label="Default" deleteOption="disabled" filled disabled />;
};

export const TagWithIcon = () => {
    return (
        <Tag
            type="approved"
            label="Default"
            deleteOption="disabled"
            icon={<IconPlaceholderIcon />}
        >
            Status
        </Tag>
    );
};

export const TagWithIconSmall = () => {
    return (
        <Tag
            type="approved"
            label="Default"
            deleteOption="disabled"
            icon={<IconPlaceholderIcon />}
            small
        >
            Status
        </Tag>
    );
};
