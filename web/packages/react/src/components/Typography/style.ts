import styled from 'styled-components';
import { TypographyRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';

const variant = ({ theme, h6 }: TypographyRootPropsType) => {
    const {
        componentOverrides: { Typography },
    } = theme;

    if (h6) {
        return Typography.Root.h6;
    }

    return {};
};

export const TypographyRoot = styled.div<TypographyRootPropsType>`
    box-sizing: border-box;

    ${({ theme }: TypographyRootPropsType) =>
        theme.componentOverrides.Typography.Root.base}
    ${variant}
    ${marginAttributes}
    ${(props: TypographyRootPropsType) => props.styles(props)}
`;
