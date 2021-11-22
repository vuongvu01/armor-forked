import styled from 'styled-components';
import {
    paddingProps,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { Typography } from '../../Typography';

/** 👉 ROOT ELEMENT */
export const DialogTitleRoot = styled.div.withConfig(propsBlocker)<
    DialogTitleRootPropsType
>`
    box-sizing: border-box;
    flex: 0 0;
    color: red;
    ${({ theme }: DialogTitleRootPropsType) =>
        theme.componentOverrides.DialogTitle.Root.base}
    ${paddingProps};
`;

export const DialogTitleText = styled(Typography)<DialogTitleTextPropsType>`
    margin: 0;
`;

export const DialogTitleDescription = styled(Typography)<
    DialogTitleDescriptionPropsType
>`
    letter-spacing: 0;
    ${({ theme }: DialogTitleDescriptionPropsType) =>
        theme.componentOverrides.DialogTitle.Description.base};

    ${getComponentOverride('DialogTitle')};
`;
