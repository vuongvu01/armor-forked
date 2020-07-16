import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

import { ButtonContentPropsType, ButtonRootPropsType } from './type';
import { marginAttributes, widthAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    tag: true,
    primary: true,
    secondary: true,
    tertiary: true,
    danger: true,
    small: true,
    wide: true,
    before: true,
    after: true,
    childrenSemantics: true,
    // add other custom properties here
} as ObjectLiteralType;

const getRootBasicStyle = ({ theme }: ButtonRootPropsType) => css<
    ButtonRootPropsType
>`
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.componentOverrides.Button.Root.base}
`;

const getRootDynamicVisualStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    secondary,
    tertiary,
}: ButtonRootPropsType) => {
    if (secondary) {
        return Button.Root.secondary;
    }

    if (tertiary) {
        return Button.Root.tertiary;
    }

    return Button.Root.primary;
};

const getRootDynamicVisualDangerStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    secondary,
    tertiary,
    danger,
}: ButtonRootPropsType) => {
    if (!danger) {
        return '';
    }

    if (secondary) {
        return Button.Root.secondary__danger;
    }

    if (tertiary) {
        return Button.Root.tertiary__danger;
    }

    // primary by default
    return Button.Root.primary__danger;
};

const getRootDynamicSizeStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    small,
}: ButtonRootPropsType) => (small ? Button.Root.small : '');

const semanticAttributesButtonContent = ({
    theme: {
        componentOverrides: { Button },
    },
    childrenSemantics,
}: ButtonRootPropsType) => {
    if (!childrenSemantics) {
        return '';
    }

    const { count, isIconPresent, isIconFirst } = childrenSemantics;

    // TODO (nmelnikov 2020-07-10): investigate why this doesn't get applied from the start
    const contentLineHeight = 'font-size: 14px; line-height: 16px;';

    if (count === 1 && !isIconPresent) {
        return contentLineHeight;
    }

    if (count === 1 && isIconPresent) {
        return Button.SemanticContent.iconOnly;
    }

    if (count === 2) {
        const padding = isIconFirst
            ? Button.SemanticContent.iconFirst
            : Button.SemanticContent.iconLast;

        return css`${contentLineHeight}${padding}`;
    }

    return '';
};

const Wrapper = ({
    children,
    ...restProps
}: ButtonRootPropsType & {
    children: (props: ButtonRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const ButtonStyle = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ButtonRootPropsType>`
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    padding: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0;
    user-select: none;
    vertical-align: middle;

    &:hover, &:focus, &:disabled, &:active, &:visited {
        text-decoration: none;
        outline: none;
    }
    
    &:disabled {
        cursor: not-allowed;
    }

    ${getRootBasicStyle}
    ${getRootDynamicVisualStyle}
    ${getRootDynamicSizeStyle}
    ${getRootDynamicVisualDangerStyle}
    ${marginAttributes}
    ${widthAttributes}
`;

// TODO (nmelnikov 2020-07-07): once we settle/create our icon element, we need to differentiate here:
// if the button contains just the icon - then the padding should be 8px on all sides (according to spec)
const getContentBasicStyle = ({
    theme: {
        componentOverrides: { Button },
    },
}: ButtonContentPropsType) => Button.Content.base;

const getContentDynamicVisualStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    small,
}: ButtonRootPropsType) => (small ? Button.Content.small : '');

export const ButtonContent = styled.span.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ButtonContentPropsType>`
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${getContentBasicStyle}
    ${getContentDynamicVisualStyle}
    ${semanticAttributesButtonContent}
`;
