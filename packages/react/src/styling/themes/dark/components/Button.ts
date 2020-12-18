import { css } from 'styled-components';
import {
    colorGrey50,
    colorRed20,
    colorRed30,
    colorRed40,
} from '../../../../tokens';
import { ButtonPropsType } from '../../../../components/Button/type';

const setBorderAndBackgroundColors = (
    color: string,
    backgroundColor?: string,
) => css`
    background-color: ${backgroundColor || color};
    border-color: ${color};
`;

export const getButtonOverride = ({
    primary: isPrimary,
    tertiary,
    secondary,
    danger,
    disabled,
}: ButtonPropsType) => {
    const primary = isPrimary || (!secondary && !tertiary);

    // set a different color for all disabled
    let result = css`
        &:disabled {
            color: ${colorGrey50};
        }
    `;

    // remove background for all non-disabled S & T on hover
    if (!disabled && (secondary || tertiary)) {
        result = css`
            ${result};
            &:hover {
                background-color: transparent;
            }
        `;
    }

    // do complete color remap for the danger state
    if (danger && !disabled) {
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
    if (disabled && (primary || secondary)) {
        result = css`
            ${result};
            &:disabled {
                color: ${colorGrey50};
            }
        `;
    }

    return result;
};
