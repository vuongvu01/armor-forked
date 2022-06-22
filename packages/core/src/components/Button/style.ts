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
    spacing,
    color,
    getOutlineFocusStyleFromColor,
    borderRadius,
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

const getPrimaryDisabledColors = () => css`
    color: ${color('neutral.05')};
    border-color: ${color('neutral.03')};
    background-color: ${color('neutral.03')};
`;

const getSecondaryDisabledColors = () => css`
    color: ${color('neutral.05')};
    border-color: ${color('neutral.05')};
`;

const getDynamicStyle = ({
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
                color: ${color('primary.05')};
                border-color: ${color('primary.05')};
            }
            &:focus-visible {
                border-color: ${color('primary.07')};
                ${getOutlineFocusStyleFromColor('primary.07')};
            }
            &:active {
                color: ${color('primary.dark')};
                border-color: ${color('primary.dark')};
                background-color: ${color('neutral.02')};
            }
        `;
    } else if (tertiary) {
        result = css`
            ${getTertiaryInitialColors};
            &:hover {
                color: ${color('primary.05')};
            }
            &:focus-visible {
                border-color: ${color('primary.07')};
                ${getOutlineFocusStyleFromColor('primary.07')};
            }
            &:active {
                color: ${color('primary.dark')};
                background-color: ${color('neutral.02')};
            }
        `;
    } else {
        result = css`
            ${getPrimaryInitialColors};
            border-width: 0;

            &:hover {
                color: ${color('neutral.00')};
                border-color: ${color('primary.05')};
                background-color: ${color('primary.05')};
            }
            &:focus-visible {
                border-color: ${color('neutral.00')};
                ${getOutlineFocusStyleFromColor('primary.07')};
            }
            &:active {
                color: ${color('neutral.00')};
                border-color: ${color('neutral.00')};
                background-color: ${color('primary.08')};
            }
        `;
    }

    if (danger) {
        if (secondary) {
            result = css`
                ${result};
                color: ${color('error.main')};
                border-color: ${color('error.main')};

                &:hover {
                    color: ${color('error.05')};
                    border-color: ${color('error.05')};
                }
                &:focus-visible {
                    border-color: ${color('error.07')};
                    ${getOutlineFocusStyleFromColor('error.07')};
                }
                &:active {
                    color: ${color('error.08')};
                    border-color: ${color('error.08')};
                }
            `;
        } else if (tertiary) {
            result = css`
                ${result};
                ${getTertiaryDangerInitialColors};
                &:hover {
                    color: ${color('error.05')};
                }
                &:active {
                    color: ${color('error.main')};
                }
                &:disabled {
                    color: ${color('neutral.05')};
                }
                &:focus-visible {
                    border-color: ${color('error.07')};
                    ${getOutlineFocusStyleFromColor('error.07')};
                }
            `;
        } else {
            result = css`
                ${result};
                ${getPrimaryDangerInitialColors};
                &:hover {
                    border-color: ${color('error.05')};
                    background-color: ${color('error.05')};
                }
                &:active {
                    border-color: ${color('error.08')};
                    background-color: ${color('error.08')};
                }
                &:focus-visible {
                    border-color: ${color('neutral.00')};
                    ${getOutlineFocusStyleFromColor('error.07')};
                }
            `;
        }
    }

    if (small) {
        result = css`
            ${result};
            padding: ${spacing(2, 3)};
            height: ${spacing(10)};
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
        } else if (secondary) {
            result = css`
                ${result};
                ${getSecondaryDisabledColors};
                &:hover,
                &:focus,
                &:active,
                &:focus:not(:active) {
                    ${getSecondaryDisabledColors};
                }
            `;
        } else {
            result = css`
                ${result};
                ${getPrimaryDisabledColors};
                &:hover,
                &:focus,
                &:active,
                &:focus:not(:active) {
                    ${getPrimaryDisabledColors};
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
export const ButtonRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<ButtonRootPropsType>`
    ${reset()};
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    padding: ${spacing(3, 4)};
    position: relative;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0;
    user-select: none;
    vertical-align: middle;
    height: ${spacing(12)};

    &:hover,
    &:focus,
    &:disabled,
    &:active,
    &:visited {
        text-decoration: none;
        outline: none;
    }

    ${typography('labelLarge')};
    ${transition({
        'background-color': true,
        'border-color': true,
        color: true,
        outline: true,
    })};

    border-radius: ${borderRadius('soft')};
    background-color: transparent;

    ${getDynamicStyle};
    ${getComponentOverride('Button')};
    ${marginProps};
    ${paddingProps};
    ${widthProps};
`;
