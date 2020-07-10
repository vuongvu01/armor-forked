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
    theme,
    secondary,
    tertiary,
}: ButtonRootPropsType) => {
    const {
        componentOverrides: { Button },
    } = theme;

    if (secondary) {
        return Button.Root.secondary;
    }

    if (tertiary) {
        return Button.Root.tertiary;
    }

    // primary by default
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

const Wrapper = ({
    children,
    ...restProps
}: ButtonRootPropsType & {
    children: (props: ButtonRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const ButtonStyle = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ButtonRootPropsType>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    vertical-align: middle;
    outline: none;
    user-select: none;
    appearance: none;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    letter-spacing: 0;
    padding: 0;
    cursor: pointer;

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
`;
