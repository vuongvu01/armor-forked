import { ReactElement } from 'react';
import styled from 'styled-components';
import { HeaderNavigationTitleRootPropsType } from './type';
import { fontWeightMedium } from '../../../tokens';
import { shouldForwardProp } from '../../../utils';

const propertyList = {};

const navigationTitleRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationTitle },
    },
}: HeaderNavigationTitleRootPropsType) => HeaderNavigationTitle.Root.base;

const HeaderNavigationTitleRootWrapper = ({
    children,
    ...restProps
}: HeaderNavigationTitleRootPropsType & {
    children: (props: HeaderNavigationTitleRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const HeaderNavigationTitleRoot = styled(
    HeaderNavigationTitleRootWrapper,
).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<HeaderNavigationTitleRootPropsType>`
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
    ${navigationTitleRootStyle}
`;
