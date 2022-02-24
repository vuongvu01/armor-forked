import styled from 'styled-components';
import {
    paddingProps,
    propsBlocker,
    getComponentOverride,
    spacing,
    color,
} from '@deliveryhero/armor-system';

import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { Typography } from '../../Typography';

/** 👉 ROOT ELEMENT */
export const DialogTitleRoot = styled.div.withConfig(
    propsBlocker,
)<DialogTitleRootPropsType>`
    box-sizing: border-box;
    flex: 0 0;
    color: red;
    padding: ${spacing(6)};
    &:not(:last-child) {
        padding-bottom: ${spacing(4)};
    }
    ${paddingProps};
`;

export const DialogTitleText = styled(Typography)<DialogTitleTextPropsType>`
    margin: 0;
`;

export const DialogTitleDescription = styled(
    Typography,
)<DialogTitleDescriptionPropsType>`
    letter-spacing: 0;
    color: ${color('neutral.07')};
    margin-top: ${spacing(2)};
    ${getComponentOverride('DialogTitle')};
`;
