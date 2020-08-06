import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import {
    CheckMarkIcon,
    CogIcon,
    EllipsisHorizontalIcon,
    PlayIcon,
    UploadIcon,
    CloseIcon,
    EditIcon,
} from '..';
import { loremIpsum } from '../../helpers/LoremIpsum';

export default {
    title: 'Icons',
    component: CheckMarkIcon,
    decorators: [withKnobs],
    parameters: {},
};

const Icons = styled.div`
    font-size: 2rem;
    color: red;
`;

export const Basic = () => (
    <Icons>
        <CheckMarkIcon />
        <CogIcon />
        <EllipsisHorizontalIcon />
        <PlayIcon />
        <UploadIcon />
        <CloseIcon />
        <EditIcon />
    </Icons>
);

export const InText = () => (
    <>
        <CheckMarkIcon />
        {loremIpsum}
        <CogIcon />
        {loremIpsum}
        <UploadIcon />
    </>
);
