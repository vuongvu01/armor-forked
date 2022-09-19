import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    color,
    colorBlue20,
    colorGrey30,
    colorGrey70,
    colorRed40,
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
    const isDisabled = disabled ?? likeDisabled;

    let result: ReturnType<typeof css> = css`
        &:disabled {
            color: ${colorGrey30};
            background-color: ${colorGrey70};
        }
    `;

    if (!isDisabled) {
        if (primary) {
            result = css`
                ${result};
                color: ${color('neutral.10')};

                &:enabled {
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
                }
            ` as FlattenSimpleInterpolation;
        }

        if (secondary) {
            result = css`
                ${result};
                color: ${color(colorBlue20)};

                &:enabled {
                    &:hover {
                        color: ${color('primary.02')};

                        ${getBorderAndBackgroundColors(
                            'primary.02',
                            'transparent',
                        )};
                    }

                    &:active {
                        color: ${color('primary.04')};
                        ${getBorderAndBackgroundColors(
                            'primary.04',
                            'neutral.11',
                        )};
                    }

                    &:focus-visible {
                        border-color: ${color('primary.03')};
                        ${getOutlineFocusStyleFromColor('primary.03')};
                    }
                }
            ` as FlattenSimpleInterpolation;
        }

        if (tertiary) {
            result = css`
                ${result};
                color: ${color(colorBlue20)};

                &:enabled {
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
                }
            ` as FlattenSimpleInterpolation;
        }
    }

    if (danger && !isDisabled) {
        if (primary) {
            result = css`
                ${result};
                ${getBorderAndBackgroundColors('error.04')};

                &:enabled {
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
                }
            `;
        }

        if (tertiary) {
            result = css`
                ${result};
                ${getBorderAndBackgroundColors('transparent')};
                color: ${color('error.04')};

                &:enabled {
                    &:hover {
                        ${getBorderAndBackgroundColors('transparent')};
                        color: ${color('error.03')};
                    }

                    &:active {
                        ${getBorderAndBackgroundColors(
                            'error.04',
                            'neutral.11',
                        )};
                        color: ${colorRed40};
                    }

                    &:focus-visible {
                        border-color: ${color('error.04')};
                        ${getOutlineFocusStyleFromColor('error.04')};
                    }
                }
            `;
        }
    }

    if (isDisabled && (secondary || tertiary)) {
        result = css`
            background-color: transparent;
        `;
    }

    return result;
};
