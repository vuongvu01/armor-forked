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

/** 👉 ROOT ELEMENT */
export const HeaderNavigationTitleRoot = styled(
    HeaderNavigationTitleRootWrapper,
)<HeaderNavigationTitleRootPropsType>`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    font-weight: ${fontWeightMedium};
    border: none;
    box-sizing: border-box;
    display: inline-flex;

    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
    }

    background-color: transparent;
    color: ${color('neutral.11')};
    font-size: ${fontSize03};
    &:hover {
        background: ${color('neutral.02')};
    }

    ${getComponentOverride('HeaderNavigationTitle')};
`;
