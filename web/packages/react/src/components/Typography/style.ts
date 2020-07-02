import styled from 'styled-components';
import { TypographyRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    h6: true,
    // add other custom properties here
} as ObjectLiteralType;

const variant = ({ theme, h6 }: TypographyRootPropsType) => {
    const {
        componentOverrides: { Typography },
    } = theme;

    if (h6) {
        return Typography.Root.h6;
    }

    return {};
};

export const TypographyRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TypographyRootPropsType>`
    box-sizing: border-box;

    ${({ theme }: TypographyRootPropsType) =>
        theme.componentOverrides.Typography.Root.base}
    ${variant}
    ${marginAttributes}
    ${(props: TypographyRootPropsType) => props.styles(props)}
`;
