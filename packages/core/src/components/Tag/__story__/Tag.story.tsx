import React, { useState } from 'react';

import { FileTaskListIcon } from '@deliveryhero/armor-icons';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tag } from '../Tag';
import { withWrapper } from '../../../helpers/Wrapper';
import { styled, Tooltip } from '../../../index';

export default {
    title: 'Components/Tag',
    component: Tag,
    decorators: [withWrapper],
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

            <GroupHelper gap={2}>
                <p>Filled state - background always be filled</p>
                <Tag
                    label="Default"
                    deleteOption="disabled"
                    filled
                    marginRight={3}
                />
                <Tag label="Default" deleteOption="disabled" filled small />
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
                    <Tag type="approved" disabled>
                        Approved
                    </Tag>{' '}
                    <Tag type="approved" small>
                        Approved small
                    </Tag>
                </GroupHelper>
                <GroupHelper gap={2}>
                    <Tag type="denied">Denied</Tag>{' '}
                    <Tag type="denied" disabled>
                        Denied
                    </Tag>{' '}
                    <Tag type="denied" small>
                        Denied small
                    </Tag>
                </GroupHelper>
                <GroupHelper gap={2}>
                    <Tag type="new">New</Tag>{' '}
                    <Tag type="new" disabled>
                        New
                    </Tag>{' '}
                    <Tag type="new" small>
                        New small
                    </Tag>
                </GroupHelper>
                <GroupHelper gap={2}>
                    <Tag type="on-hold">On hold</Tag>{' '}
                    <Tag type="on-hold" disabled>
                        On hold
                    </Tag>{' '}
                    <Tag type="on-hold" small>
                        On hold
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
    const [isOpen4, setIsOpen4] = useState(true);

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

                {isOpen1 && (
                    <Tag
                        label="Close me"
                        deleteOption="enabled"
                        onClose={() => setIsOpen1(false)}
                        marginRight={3}
                        small
                    />
                )}
                {isOpen2 && (
                    <Tag
                        label="Close me"
                        onClose={() => setIsOpen2(false)}
                        marginRight={3}
                    />
                )}
                {isOpen2 && (
                    <Tag
                        label="Close me"
                        onClose={() => setIsOpen2(false)}
                        marginRight={3}
                        small
                    />
                )}
                {isOpen3 && (
                    <Tag
                        label="Close me too!"
                        onClose={() => setIsOpen3(false)}
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
                {isOpen4 && (
                    <Tag
                        label="You can't close me"
                        deleteOption="enabled"
                        onClose={() => setIsOpen4(false)}
                        disabled
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

const background = {
    Approved: '#44c293',
    Rejected: '#f44336',
};

const StyledTag = styled(Tag)`
    display: flex;
    align-items: center;
    margin-right: 5px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fafafa;
    & p {
        margin: auto 8px;
    }
`;
const StyledSection = styled.section`
    height: 48px;
    margin: -8px 0;
    display: flex;
    padding: 0 8px;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 0;
        height: 0;
        background: transparent;
    }
`;

export const StatusIndicatorComponent = () => {
    return (
        <StyledSection>
            <Tag type="approved" label="Approved" />
            <Tag type="denied" label="Denied" />
            {Object.keys(background).map((status: any) => (
                <Tooltip
                    small
                    key={status}
                    data-test="status-tooltip"
                    content={`Tier 0 - paid: ${status}`}
                >
                    <StyledTag
                        label={`T0 - De-centralized Onboarding`}
                        // @ts-ignore
                        style={{ borderColor: background[status] }}
                        deleteOption="disabled"
                        data-test="status-tag"
                    />
                </Tooltip>
            ))}
        </StyledSection>
    );
};

export const SmallStatusTags = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Small tags with indicators</p>
                <Tag
                    type="denied"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    small
                >
                    Status
                </Tag>
                <Tag
                    type="approved"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    small
                >
                    Status
                </Tag>
                <Tag
                    type="new"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    small
                >
                    Status
                </Tag>
                <Tag
                    type="on-hold"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    small
                >
                    Status
                </Tag>
            </GroupHelper>
        </>
    );
};

export const TagWithIndicators = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Left indicators</p>
                <Tag
                    type="denied"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                >
                    Status
                </Tag>
                <Tag
                    type="approved"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                >
                    Status
                </Tag>
                <Tag
                    type="new"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                >
                    Status
                </Tag>
                <Tag
                    type="on-hold"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                >
                    Status
                </Tag>
                <Tag
                    type="on-hold"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                    disabled
                >
                    Status
                </Tag>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Small tags with indicators</p>
                <Tag
                    type="denied"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                    small
                >
                    Status
                </Tag>
                <Tag
                    type="approved"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    indicator="99"
                    small
                >
                    Status
                </Tag>
            </GroupHelper>
        </>
    );
};

export const TagWithIcons = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Left icon</p>
                <Tag
                    type="denied"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                >
                    Status
                </Tag>
                <Tag
                    type="approved"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                >
                    Status
                </Tag>
                <Tag
                    type="new"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                >
                    Status
                </Tag>
                <Tag
                    type="on-hold"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                >
                    Status
                </Tag>
                <Tag
                    type="on-hold"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                    disabled
                >
                    Status
                </Tag>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Small tags with icons</p>
                <Tag
                    type="denied"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                    small
                >
                    Status
                </Tag>
                <Tag
                    type="approved"
                    label="Default"
                    deleteOption="disabled"
                    marginRight={3}
                    icon={<FileTaskListIcon />}
                    small
                >
                    Status
                </Tag>
            </GroupHelper>
        </>
    );
};

export const TagWithZero = () => {
    return <Tag>{0}</Tag>;
};
