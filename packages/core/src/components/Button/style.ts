import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    reset,
    propsBlocker,
    getComponentOverride,
    marginProps,
    paddingProps,
    widthProps,
    transition,
    typography,
    token,
    spacing,
    color,
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '@deliveryhero/armor-system';

import { ButtonRootPropsType } from './type';

const getPrimaryInitialColors = () => css`
    color: ${color('neutral.00')};
    border-color: ${color('primary.main')};
    background-color: ${color('primary.main')};
`;

const getTertiaryInitialColors = () => css`
    color: ${color('primary.main')};
`;

const getPrimaryDangerInitialColors = () => css`
    border-color: ${color('error.main')};
    background-color: ${color('error.main')};
`;

const getTertiaryDangerInitialColors = () => css`
    color: ${color('error.main')};
`;

const getPrimarySecondaryDisabledColors = () => css`
    color: ${color('neutral.05')};
    border-color: ${color('neutral.03')};
    background-color: ${color('neutral.03')};
`;

const getDynamicStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    secondary,
    tertiary,
    danger,
    small,
    disabled,
    likeDisabled,
}: ButtonRootPropsType) => {
    let result = {};

    if (secondary) {
        result = css`
            color: ${color('primary.main')};
            border-color: ${color('primary.main')};
            background-color: transparent;

            &:hover {
                color: ${color('primary.light')};
                border-color: ${color('primary.light')};
                background-color: ${color('primary.lightest')};
            }
            &:focus {
                color: ${color('primary.light')};
                border-color: ${color('primary.light')};
            }
            &:active {
                color: ${color('primary.dark')};
                border-color: ${color('primary.dark')};
            }
            ${Button.Root.secondary};
        `;
    } else if (tertiary) {
        result = css`
            ${getTertiaryInitialColors};
            &:hover,
            &:focus {
                color: ${color('primary.light')};
            }
            &:active {
                color: ${color('primary.dark')};
            }
            &:focus:not(:active) {
                ${getTertiaryInitialColors};
            }
            ${Button.Root.tertiary};
        `;
    } else {
        result = css`
            ${getPrimaryInitialColors};
            &:hover,
            &:focus {
                color: ${color('neutral.00')};
                border-color: ${color('primary.light')};
                background-color: ${color('primary.light')};
            }
            &:active {
                color: ${color('neutral.00')};
                border-color: ${color('primary.dark')};
                background-color: ${color('primary.dark')};
            }
            &:focus:not(:active) {
                ${getPrimaryInitialColors};
            }
            ${Button.Root.primary};
        `;
    }

    if (danger) {
        if (secondary) {
            result = css`
                ${result};
                color: ${color('error.main')};
                border-color: ${color('error.main')};

                &:hover,
                &:focus {
                    color: ${color('error.light')};
                    border-color: ${color('error.light')};
                }
                &:active {
                    color: ${color('error.dark')};
                    border-color: ${color('error.dark')};
                }
                ${Button.Root.secondary__danger};
            `;
        } else if (tertiary) {
            result = css`
                ${result};
                ${getTertiaryDangerInitialColors};
                &:hover,
                &:focus,
                &:active {
                    color: ${color('error.main')};
                }
                &:disabled {
                    color: ${color('neutral.05')};
                }
                &:focus:not(:active) {
                    ${getTertiaryDangerInitialColors};
                }
                ${Button.Root.tertiary__danger};
            `;
        } else {
            result = css`
                ${result};
                ${getPrimaryDangerInitialColors};
                &:hover,
                &:focus {
                    border-color: ${color('error.light')};
                    background-color: ${color('error.light')};
                }
                &:active {
                    border-color: ${color('error.dark')};
                    background-color: ${color('error.dark')};
                }
                &:focus:not(:active) {
                    ${getPrimaryDangerInitialColors};
                }
                ${Button.Root.primary__danger};
            `;
        }
    }

    if (small) {
        result = css`
            ${result};
            padding-top: ${componentSpacing02};
            padding-bottom: ${componentSpacing02};
            ${Button.Root.small};
        `;
    }

    if (disabled || likeDisabled) {
        result = css`
            ${result};
            cursor: not-allowed;
        `;

        if (tertiary) {
            result = css`
                ${result};
                color: ${color('neutral.05')};
                &:hover,
                &:focus,
                &:active,
                &:focus:not(:active) {
                    color: ${color('neutral.05')};
                }
            `;
        } else {
            result = css`
                ${result};
                ${getPrimarySecondaryDisabledColors};
                &:hover,
                &:focus,
                &:active,
                &:focus:not(:active) {
                    ${getPrimarySecondaryDisabledColors};
                }
            `;
        }
    }

    return result;
};

const Wrapper = ({
    children,
    ...restProps
}: ButtonRootPropsType & {
    children: (props: ButtonRootPropsType) => ReactElement;
}) => children({ ...restProps });

/** 👉 ROOT ELEMENT */
export const ButtonRoot = styled(Wrapper).withConfig(propsBlocker)<
    ButtonRootPropsType
>`
    ${reset()};
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    padding: ${spacing(componentSpacing03)} ${spacing(componentSpacing04)};
    position: relative;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0;
    user-select: none;
    vertical-align: middle;

    &:hover,
    &:focus,
    &:disabled,
    &:active,
    &:visited {
        text-decoration: none;
        outline: none;
    }

    ${typography('labelMedium')};
    ${transition({
        'background-color': true,
        'border-color': true,
        color: true,
    })};

    border-radius: ${token('shape.borderRadius.soft')};
    background-color: transparent;

    font-family: ${token('typography.body.fontFamily')}, sans-serif; // deprecated
    ${({ theme }: ButtonRootPropsType) =>
        theme.componentOverrides.Button.Root.base}; // deprecated

    ${getDynamicStyle};
    ${getComponentOverride('Button')};
    ${marginProps};
    ${paddingProps};
    ${widthProps};
`;
