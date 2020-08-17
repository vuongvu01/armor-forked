import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tag } from '../Tag';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [withKnobs],
    parameters: {},
};

export const UserTag = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Delete button appears onHover</p>
                <Tag label="Default" />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Delete button always enabled</p>
                <Tag label="Default" deleteOption="enabled" />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Delete button always disabled</p>
                <Tag label="Default" deleteOption="disabled" />
            </GroupHelper>
        </>
    );
};

export const StatusTag = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <Tag type="approved" />
                <Tag type="denied" />
                <Tag type="new" />
            </GroupHelper>
        </>
    );
};

export const InteractiveExample = () => {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    return (
        <>
            <GroupHelper gap={2}>
                {isOpen1 && (
                    <Tag
                        label="Close me"
                        deleteOption="enabled"
                        onClose={() => setIsOpen1(false)}
                    />
                )}
                {isOpen2 && (
                    <Tag label="Close me" onClose={() => setIsOpen2(false)} />
                )}
            </GroupHelper>
        </>
    );
};
