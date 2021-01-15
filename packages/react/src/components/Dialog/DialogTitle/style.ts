import styled from 'styled-components';

import { getPropsBlocker } from '../../../utils';
import { ObjectLiteralType } from '../../../type';
import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { Typography } from '../../Typography';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

const propertyList = {
    description: true,
    // add other custom properties here
} as ObjectLiteralType;

export const DialogTitleRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<DialogTitleRootPropsType>`
    box-sizing: border-box;
    flex: 0 0;
    ${({ theme }: DialogTitleRootPropsType) =>
        theme.componentOverrides.DialogTitle.Root.base}
`;

export const DialogTitleText = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<DialogTitleTextPropsType>`
    margin: 0;
`;

export const DialogTitleDescription = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<DialogTitleDescriptionPropsType>`
    letter-spacing: 0;
    ${({ theme }: DialogTitleDescriptionPropsType) =>
        theme.componentOverrides.DialogTitle.Description.base};

    ${getComponentOverride('DialogTitle')};
`;
