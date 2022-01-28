import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
} from '@deliveryhero/armor-system';
import { ButtonPropsType } from '@deliveryhero/armor';

const getBorderAndBackgroundColors = (
    colorString: string,
    backgroundColorString?: string,
) => css`
    border-color: ${color(colorString)};
    background-color: ${color(backgroundColorString || colorString)};
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
            color: ${color('neutral.07')};
        }
    `;

    // button styles for P, S & T states
    if (!reallyDisabled) {
        if (primary) {
            result = css`
                ${result};
                &:hover {
                    ${getBorderAndBackgroundColors('primary.02')};
                }
                &:active {
                    ${getBorderAndBackgroundColors('primary.04')};
                }
                &:focus-visible {
                    border-color: ${color('neutral.10')};
                    ${getOutlineFocusStyleFromColor('primary.03')};
                }
            ` as FlattenSimpleInterpolation;
        }
        if (secondary) {
            result = css`
                ${result};
                &:hover {
                    color: ${color('primary.02')};
                    ${getBorderAndBackgroundColors(
                        'primary.02',
                        'transparent',
                    )};
                }
                &:active {
                    color: ${color('primary.04')};
                    ${getBorderAndBackgroundColors('primary.04', 'neutral.11')};
                }
                &:focus-visible {
                    border-color: ${color('primary.03')};
                    ${getOutlineFocusStyleFromColor('primary.03')};
                }
            ` as FlattenSimpleInterpolation;
        }
        if (tertiary) {
            result = css`
                ${result};
                &:hover {
                    color: ${color('primary.02')};
                    ${getBorderAndBackgroundColors('transparent')};
                }
                &:active {
                    color: ${color('primary.04')};
                    ${getBorderAndBackgroundColors('neutral.11')};
                }
                &:focus-visible {
                    border-color: ${color('primary.03')};
                    ${getOutlineFocusStyleFromColor('primary.03')};
                }
            ` as FlattenSimpleInterpolation;
        }
    }

    // do complete color remap for the danger state
    if (danger && !reallyDisabled) {
        if (primary) {
            result = css`
                ${result};
                ${getBorderAndBackgroundColors('error.04')};
                &:hover {
                    ${getBorderAndBackgroundColors('error.03')};
                }
                &:active {
                    ${getBorderAndBackgroundColors('error.05')};
                }
                &:focus-visible {
                    border-color: ${color('neutral.10')};
                    ${getOutlineFocusStyleFromColor('error.04')};
                }
            `;
        }

        if (secondary) {
            result = css`
                ${result};
                ${getBorderAndBackgroundColors('error.04', 'transparent')};
                color: ${color('error.04')};
                &:hover {
                    ${getBorderAndBackgroundColors('error.03', 'transparent')};
                    color: ${color('error.03')};
                }
                &:active {
                    ${getBorderAndBackgroundColors('error.04', 'neutral.11')};
                    color: ${color('error.05')};
                }
                &:focus-visible {
                    border-color: ${color('error.04')};
                    ${getOutlineFocusStyleFromColor('error.04')};
                }
            `;
        }

        if (tertiary) {
            result = css`
                ${result};
                ${getBorderAndBackgroundColors('transparent')};
                color: ${color('error.04')};
                &:hover {
                    ${getBorderAndBackgroundColors('transparent')};
                    color: ${color('error.03')};
                }
                &:active {
                    ${getBorderAndBackgroundColors('error.04', 'neutral.11')};
                    color: ${color('error.05')};
                }
                &:focus-visible {
                    border-color: ${color('error.04')};
                    ${getOutlineFocusStyleFromColor('error.04')};
                }
            `;
        }
    }

    // make disabled colors slightly lighter for P & S
    if (reallyDisabled && (primary || secondary)) {
        result = css`
            ${result};
            color: ${color('neutral.07')};
        `;
    }

    return result;
};
