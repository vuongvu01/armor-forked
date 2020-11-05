import styled, { css } from 'styled-components';
import { ArrowUpIcon } from '@deliveryhero/armor-icons';
import { ReactElement } from 'react';
import {
    MenuElementContentPropsType,
    MenuElementExpansionHandleArrowPropsType,
    MenuElementExpansionHandlePropsType,
    MenuElementRootPropsType,
} from './type';
import {
    marginAttributes,
    paddingAttributes,
} from '../../../system/attributes';
import { makePropList, shouldForwardProp } from '../../../utils';
import { transitionDurationInSec } from '../../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'enableExpansionHandle',
    'secondary',
    'tertiary',
    'selected',
    'expanded',
    'tag',
]);

const MenuElementRootWrapper = ({
    children,
    ...restProps
}: MenuElementRootPropsType & {
    children: (props: MenuElementRootPropsType) => ReactElement;
}) => children({ ...restProps });

const getRootDynamicStyle = ({
    theme,
    enableExpansionHandle,
    secondary,
    tertiary,
    selected,
}: MenuElementRootPropsType) => {
    const {
        componentOverrides: { MenuElement },
    } = theme;

    let result = MenuElement.Root.base;

    if (secondary) {
        result = css`
            ${result};
            ${MenuElement.Root.secondary}
        `;
    } else if (tertiary) {
        result = css`
            ${result};
            ${MenuElement.Root.tertiary}
        `;
    }

    if (enableExpansionHandle) {
        result = css`
            ${result};
            padding-right: 0;
        `;
    }

    if (selected) {
        result = css`
            ${result};
            ${MenuElement.Root.selected}
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const MenuElementRoot = styled(MenuElementRootWrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuElementRootPropsType>`
    box-sizing: border-box;
    display: flex;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    transition: background-color ${transitionDurationInSec}s ease;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 0;
    }

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${paddingAttributes}
`;

const getContentDynamicStyle = ({ theme }: MenuElementContentPropsType) => {
    return theme.componentOverrides.MenuElement.Content.base;
};

export const MenuElementContent = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuElementContentPropsType>`
    flex-grow: 1;
    display: flex;

    ${getContentDynamicStyle}
`;

const getExpansionHandleDynamicStyle = ({
    theme,
}: MenuElementExpansionHandlePropsType) => {
    return theme.componentOverrides.MenuElement.ExpanseHandle.base;
};

export const MenuElementExpansionHandle = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuElementExpansionHandlePropsType>`
    display: flex;
    align-self: stretch;
    cursor: pointer;

    ${getExpansionHandleDynamicStyle}
`;

const getExpansionHandleArrowDynamicStyle = ({
    expanded,
    theme,
}: MenuElementExpansionHandleArrowPropsType) => {
    const {
        componentOverrides: { MenuElement },
    } = theme;

    let result = MenuElement.ExpanseHandleArrow.base;

    if (expanded) {
        result = css`
            ${result};
            transform: rotate(180deg);
        `;
    }

    return result;
};

export const MenuElementExpansionHandleArrow = styled(ArrowUpIcon).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MenuElementExpansionHandleArrowPropsType>`
    transition: transform ${transitionDurationInSec}s ease;
    transform-origin: center;

    ${getExpansionHandleArrowDynamicStyle}
`;
