import styled from 'styled-components';

import { ObjectLiteralType } from '../../../type';
import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { Typography } from '../../Typography';
import {
    paddingAttributes,
    propsBlocker,
    getComponentOverride,
} from '../../../system';

export const DialogTitleRoot = styled.div.withConfig(propsBlocker)<
    DialogTitleRootPropsType
>`
    box-sizing: border-box;
    flex: 0 0;
    color: red;
    ${({ theme }: DialogTitleRootPropsType) =>
        theme.componentOverrides.DialogTitle.Root.base}
    ${paddingAttributes};
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
