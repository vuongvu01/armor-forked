import { ReactElement } from 'react';
import styled from 'styled-components';
import { HeaderNavigationTitleRootPropsType } from './type';
import { fontSize03, fontWeightMedium } from '../../../tokens';
import { color, getComponentOverride } from '../../../system';

const HeaderNavigationTitleRootWrapper = ({
    children,
    ...restProps
}: HeaderNavigationTitleRootPropsType & {
    children: (props: HeaderNavigationTitleRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const HeaderNavigationTitleRoot = styled(
    HeaderNavigationTitleRootWrapper,
)<HeaderNavigationTitleRootPropsType>`
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    font-weight: ${fontWeightMedium};
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    display: inline-flex;

    text-decoration: none;
    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
    }

    background-color: transparent;
    color: ${color('neutral.06')};
    font-size: ${fontSize03};
    &:hover {
        background: ${color('neutral.02')};
    }

    ${getComponentOverride('HeaderNavigationTitle')};
`;
