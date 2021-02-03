import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tag } from '../Tag';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const UserTag = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Delete button always disabled</p>
                <Tag label="Default" deleteOption="disabled" marginRight={3} />
                <Tag label="Small" deleteOption="disabled" small />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Delete button appears onHover</p>
                <Tag label="Default" marginRight={3} />
                <Tag label="Small" small />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Disabled state - delete button does not appear onHover</p>
                <Tag label="Default" marginRight={3} disabled />
                <Tag label="Small" disabled small />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Delete button always enabled</p>
                <Tag label="Default" deleteOption="enabled" marginRight={3} />
                <Tag label="Small" deleteOption="enabled" small />
            </GroupHelper>

            <GroupHelper gap={2}>
                <p>Disabled state - delete button shows no user feedback</p>
                <Tag
                    label="Default"
                    deleteOption="enabled"
                    marginRight={3}
                    disabled
                />
                <Tag label="Default" deleteOption="enabled" disabled small />
            </GroupHelper>
        </>
    );
};

export const StatusTag = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <GroupHelper gap={2}>
                    <Tag type="approved">Approved</Tag>{' '}
                    <Tag type="approved" small>
                        Approved small
                    </Tag>
                </GroupHelper>
                <GroupHelper gap={2}>
                    <Tag type="denied">Denied</Tag>{' '}
                    <Tag type="denied" small>
                        Denied small
                    </Tag>
                </GroupHelper>
                <GroupHelper gap={2}>
                    <Tag type="new">New</Tag>{' '}
                    <Tag type="new" small>
                        New small
                    </Tag>
                </GroupHelper>
            </GroupHelper>
        </>
    );
};

export const InteractiveExample = () => {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [isOpen3, setIsOpen3] = useState(true);
    return (
        <>
            <GroupHelper gap={2}>
                {isOpen1 && (
                    <Tag
                        label="Close me"
                        deleteOption="enabled"
                        onClose={() => setIsOpen1(false)}
                        marginRight={3}
                    />
                )}
                {isOpen2 && (
                    <Tag
                        label="Close me"
                        onClose={() => setIsOpen2(false)}
                        marginRight={3}
                    />
                )}
                {isOpen3 && (
                    <Tag
                        label="Close me too!"
                        onClose={() => setIsOpen3(false)}
                        marginRight={3}
                    />
                )}
            </GroupHelper>
        </>
    );
};

export const Squeeze = () => {
    return (
        <>
            <div style={{ width: '200px', wordBreak: 'break-word' }}>
                <Tag type="approved">ApprovedApprovedApprovedApproved</Tag>
            </div>
            <br />
            <div style={{ width: '200px', wordBreak: 'break-word' }}>
                <Tag type="approved">Approved Approved Approved Approved</Tag>
            </div>
        </>
    );
};
