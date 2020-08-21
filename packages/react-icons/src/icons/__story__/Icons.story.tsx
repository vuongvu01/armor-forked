import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import * as I from '..';

import { loremIpsum } from '../../../../react/src/helpers/LoremIpsum';

export default {
    title: 'Icons',
    component: I.ArrowUpIcon,
    decorators: [withKnobs],
    parameters: {},
};

const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-bottom: -0.5rem;
    margin-left: -0.5rem;

    & > * {
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }
`;

const Icon = styled.div`
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    box-sizing: border-box;
    height: 3rem;
    width: 3rem;
    background-color: #f7f7f7;
    color: #050505;
`;

export const Basic = () => (
    <>
        <h2>Essentials</h2>
        <Icons>
            <Icon>
                <I.AddIcon />
            </Icon>
            <Icon>
                <I.AttachmentIcon />
            </Icon>
            <Icon>
                <I.DeleteIcon />
            </Icon>
            <Icon>
                <I.EditIcon />
            </Icon>
            <Icon>
                <I.ForkKnifeIcon />
            </Icon>
            <Icon>
                <I.InfoIcon />
            </Icon>
            <Icon>
                <I.PhoneRingingIcon />
            </Icon>
            <Icon>
                <I.SearchIcon />
            </Icon>
            <Icon>
                <I.WarningIcon />
            </Icon>
        </Icons>
        <h2>Arrow</h2>
        <Icons>
            <Icon>
                <I.ArrowUpIcon />
            </Icon>
            <Icon>
                <I.ArrowRightIcon />
            </Icon>
            <Icon>
                <I.ArrowDownIcon />
            </Icon>
            <Icon>
                <I.ArrowLeftIcon />
            </Icon>
            <Icon>
                <I.ArrowUpTailIcon />
            </Icon>
            <Icon>
                <I.ArrowRightTailIcon />
            </Icon>
            <Icon>
                <I.ArrowDownTailIcon />
            </Icon>
            <Icon>
                <I.ArrowLeftTailIcon />
            </Icon>
            <Icon>
                <I.ArrowReturnRightIcon />
            </Icon>
        </Icons>
        <h2>Cancel</h2>
        <Icons>
            <Icon>
                <I.CancelIcon />
            </Icon>
            <Icon>
                <I.CancelCircleIcon />
            </Icon>
            <Icon>
                <I.CancelCircleFilledIcon />
            </Icon>
        </Icons>
        <h2>Tick</h2>
        <Icons>
            <Icon>
                <I.TickIcon />
            </Icon>
            <Icon>
                <I.TickBoxIcon />
            </Icon>
            <Icon>
                <I.TickCircleFilledIcon />
            </Icon>
        </Icons>
        <h2>Upload</h2>
        <Icons>
            <Icon>
                <I.ImageUploadIcon />
            </Icon>
            <Icon>
                <I.UploadIcon />
            </Icon>
        </Icons>
        <h2>Settings</h2>
        <Icons>
            <Icon>
                <I.CogIcon />
            </Icon>
            <Icon>
                <I.SettingsHumanIcon />
            </Icon>
        </Icons>
        <h2>Text Formatting</h2>
        <Icons>
            <Icon>
                <I.AlignCenterIcon />
            </Icon>
            <Icon>
                <I.AlignLeftIcon />
            </Icon>
            <Icon>
                <I.AlignRightIcon />
            </Icon>
            <Icon>
                <I.UnlinkIcon />
            </Icon>
            <Icon>
                <I.LinkIcon />
            </Icon>
            <Icon>
                <I.ListBulletIcon />
            </Icon>
            <Icon>
                <I.ListNumberIcon />
            </Icon>
            <Icon>
                <I.TextBoldIcon />
            </Icon>
            <Icon>
                <I.TextItalicIcon />
            </Icon>
            <Icon>
                <I.TextUnderlineIcon />
            </Icon>
        </Icons>
        <h2>Other</h2>
        <Icons>
            <Icon>
                <I.EllipsisHorizontalIcon />
            </Icon>
            <Icon>
                <I.PlayIcon />
            </Icon>
        </Icons>
    </>
);

export const InText = () => (
    <>
        <I.ArrowUpIcon />
        {loremIpsum}
        <I.ArrowDownIcon />
        {loremIpsum}
        <I.ArrowRightTailIcon />
    </>
);
