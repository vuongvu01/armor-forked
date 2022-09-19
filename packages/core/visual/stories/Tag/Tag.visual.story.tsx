import React from 'react';
import { IconPlaceholderIcon } from '@deliveryhero/armor-icons';

import { Tag } from '../../../src/components/Tag';

export default {
    title: 'Tag',
    component: Tag,
};

export const UserTypeDefault = () => <Tag label="Default" />;

export const UserTypeDefaultDisabled = () => <Tag label="Default" disabled />;

export const UserTypeDeleteEnabled = () => (
    <Tag label="Default" deleteOption="enabled" />
);

export const UserTypeDeleteEnabledDisabled = () => (
    <Tag label="Default" deleteOption="enabled" disabled />
);

export const UserTypeDeleteDisabled = () => (
    <Tag label="Default" deleteOption="disabled" />
);

export const UserTypeDeleteDisabledDisabled = () => (
    <Tag label="Default" deleteOption="disabled" disabled />
);

export const UserTypeDeleteEnabledSmall = () => (
    <Tag label="Default" deleteOption="enabled" small />
);

export const UserTypeDeleteEnabledSmallDisabled = () => (
    <Tag label="Default" deleteOption="enabled" small disabled />
);

export const UserTypeDeleteDisabledSmall = () => (
    <Tag label="Default" deleteOption="disabled" small />
);

export const UserTypeDeleteDisabledSmallDisabled = () => (
    <Tag label="Default" deleteOption="disabled" small disabled />
);

export const StatusTypeApproved = () => <Tag type="approved" />;

export const StatusTypeApprovedDisabled = () => (
    <Tag type="approved" disabled />
);

export const StatusTypeDenied = () => <Tag type="denied" />;

export const StatusTypeDeniedDisabled = () => <Tag type="denied" disabled />;

export const StatusTypeNew = () => <Tag type="new" />;

export const StatusTypeNewDisabled = () => <Tag type="new" disabled />;

export const StatusTypeApprovedSmall = () => <Tag type="approved" small />;

export const StatusTypeApprovedSmallDisabled = () => (
    <Tag type="approved" small disabled />
);

export const StatusTypeDeniedSmall = () => <Tag type="denied" small />;

export const StatusTypeDeniedSmallDisabled = () => (
    <Tag type="denied" small disabled />
);

export const StatusTypeNewSmall = () => <Tag type="new" small />;

export const StatusTypeNewSmallDisabled = () => (
    <Tag type="new" small disabled />
);

export const CustomStatusTypeApproved = () => (
    <Tag type="approved">Custom approved</Tag>
);

export const CustomStatusTypeApprovedDisabled = () => (
    <Tag type="approved" disabled>
        Custom approved
    </Tag>
);

export const CustomStatusTypeDenied = () => (
    <Tag type="denied">Custom denied</Tag>
);

export const CustomStatusTypeDeniedDisabled = () => (
    <Tag type="denied" disabled>
        Custom denied
    </Tag>
);

export const CustomStatusTypeNew = () => <Tag type="new">Custom new</Tag>;

export const CustomStatusTypeNewDisabled = () => (
    <Tag type="new" disabled>
        Custom new
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
