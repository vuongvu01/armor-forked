import styled from 'styled-components';

import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';
import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { Typography } from '../Typography';

const propertyList = {
    description: true,
    // add other custom properties here
} as ObjectLiteralType;

export const DialogTitleRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<DialogTitleRootPropsType>`
    box-sizing: border-box;
    flex: 0 0;
    ${({ theme }: DialogTitleRootPropsType) =>
        theme.componentOverrides.DialogTitle.Root.base}
    ${(props: DialogTitleRootPropsType) => props.styles(props)}
`;

export const DialogTitleText = styled(Typography)<DialogTitleTextPropsType>`
    margin: 0;
`;

export const DialogTitleDescription = styled.div<
    DialogTitleDescriptionPropsType
>`
    letter-spacing: 0;
    ${({ theme }: DialogTitleDescriptionPropsType) =>
        theme.componentOverrides.DialogTitle.Description.base}
`;
