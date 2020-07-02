import styled from 'styled-components';
import {
    DialogTitleRootPropsType,
    DialogTitleTextPropsType,
    DialogTitleDescriptionPropsType,
} from './type';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

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

// todo: probably reuse Typography component as title
export const DialogTitleText = styled.div<DialogTitleTextPropsType>`
    letter-spacing: 0;
    ${({ theme }: DialogTitleTextPropsType) =>
        theme.componentOverrides.DialogTitle.Text.base}
`;

export const DialogTitleDescription = styled.div<
    DialogTitleDescriptionPropsType
>`
    letter-spacing: 0;
    ${({ theme }: DialogTitleDescriptionPropsType) =>
        theme.componentOverrides.DialogTitle.Description.base}
`;
