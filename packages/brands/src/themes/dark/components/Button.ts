import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    colorGrey50,
    colorRed20,
    colorRed30,
    colorRed40,
    color as colorUtil,
} from '@deliveryhero/armor-system';
import { ButtonPropsType } from '@deliveryhero/armor';

const setBorderAndBackgroundColors = (
    color: string,
    backgroundColor?: string,
) => css`
    background-color: ${backgroundColor || color};
    border-color: ${color};
`;

export const getButtonOverride = ({
    primary: isPrimary,
    secondary,
    tertiary,
    danger,
    disabled,
    likeDisabled,
}: ButtonPropsType) => {
    const primary = isPrimary || (!secondary && !tertiary);
    const reallyDisabled = disabled ?? likeDisabled;

    // set a different color for all disabled
    let result = css`
        &:disabled {
            color: ${colorGrey50};
        }
    `;

    // button styles for P, S & T states
    if (!reallyDisabled) {
        if (primary) {
            result = css`
                ${result};
                &:hover {
                    background-color: ${colorUtil('primary.02')};
                    border-color: ${colorUtil('primary.02')};
                }
                &:active {
                    background-color: ${colorUtil('primary.04')};
                    border-color: ${colorUtil('primary.04')};
                }
            ` as FlattenSimpleInterpolation;
        }
        if (secondary) {
            result = css`
                ${result};
                &:hover {
                    background-color: transparent;
                    color: ${colorUtil('primary.02')};
                    border-color: ${colorUtil('primary.02')};
                }
                &:active {
                    background-color: ${colorUtil('neutral.11')};
                    color: ${colorUtil('primary.02')};
                    border-color: ${colorUtil('primary.02')};
                }
            ` as FlattenSimpleInterpolation;
        }
        if (tertiary) {
            result = css`
                ${result};
                &:hover {
                    background-color: transparent;
                    color: ${colorUtil('primary.02')};
                    border-color: transparent;
                }
                &:active {
                    background-color: ${colorUtil('neutral.11')};
                    color: ${colorUtil('primary.02')};
                    border-color: ${colorUtil('neutral.11')};
                }
            ` as FlattenSimpleInterpolation;
        }
    }

    // do complete color remap for the danger state
    if (danger && !reallyDisabled) {
        if (primary) {
            result = css`
                ${result};
                ${setBorderAndBackgroundColors(colorRed30)};
                &:hover,
                &:focus {
                    ${setBorderAndBackgroundColors(colorRed20)};
                }
                &:active {
                    ${setBorderAndBackgroundColors(colorRed40)};
                }
                &:focus:not(:active) {
                    ${setBorderAndBackgroundColors(colorRed30)};
                }
            `;
        }

        if (secondary) {
            result = css`
                ${result};
                ${setBorderAndBackgroundColors(colorRed30, 'transparent')};
                color: ${colorRed30};
                &:hover,
                &:focus {
                    ${setBorderAndBackgroundColors(colorRed20, 'transparent')};
                    color: ${colorRed20};
                }
                &:active {
                    ${setBorderAndBackgroundColors(colorRed40, 'transparent')};
                    color: ${colorRed40};
                }
                &:focus:not(:active) {
                    ${setBorderAndBackgroundColors(colorRed30, 'transparent')};
                    color: ${colorRed30};
                }
            `;
        }

        if (tertiary) {
            result = css`
                ${result};
                ${setBorderAndBackgroundColors('transparent', 'transparent')};
                &:hover,
                &:focus,
                &:active,
                &:focus:not(:active) {
                    ${setBorderAndBackgroundColors(
                        'transparent',
                        'transparent',
                    )};
                }

                color: ${colorRed30};
                &:hover,
                &:focus {
                    color: ${colorRed20};
                }
                &:active {
                    color: ${colorRed40};
                }
                &:focus:not(:active) {
                    color: ${colorRed30};
                }
            `;
        }
    }

    // make disabled colors slightly lighter for P & S
    if (reallyDisabled && (primary || secondary)) {
        result = css`
            ${result};
            color: ${colorGrey50};
        `;
    }

    return result;
};
