import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { HeaderNavigationLinkRootPropsType } from './type';
import { getPropsBlocker, makePropList } from '../../../../utils';
import { getComponentOverride } from '../../../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['isActive']);

const HeaderNavigationLinkRootWrapper = ({
    children,
    ...restProps
}: HeaderNavigationLinkRootPropsType & {
    children: (props: HeaderNavigationLinkRootPropsType) => ReactElement;
}) => children({ ...restProps });

const navigationLinkRootStyle = ({
    isActive,
    theme: {
        componentOverrides: { HeaderNavigationLink },
    },
}: HeaderNavigationLinkRootPropsType) => {
    let result = HeaderNavigationLink.Root.base;

    if (isActive) {
        result = css`
            ${result};
            position: relative;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
            }
            ${HeaderNavigationLink.Root.active}
        `;
    }

    return result;
};

export const HeaderNavigationLinkRoot = styled(
    HeaderNavigationLinkRootWrapper,
).withConfig(getPropsBlocker(propertyList, false))<
    HeaderNavigationLinkRootPropsType
>`
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

    ${navigationLinkRootStyle};
    ${getComponentOverride('HeaderNavigationLink')};
    background-color: transparent;
`;
