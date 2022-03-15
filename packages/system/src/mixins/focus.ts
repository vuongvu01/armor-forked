import { css, FlattenSimpleInterpolation } from 'styled-components';
import { spacing, color, transition, getComponentOverride } from '.';
import { PropsWithThemeType } from './type';

type Props = Partial<{
    /** Will not assign focus style */
    disabled: boolean;
    /** Assign error focus style */
    error: boolean;
    /** Assign filled focus style */
    filled: boolean;
    /** Assign focus style without outline (border) */
    noOutline: boolean;
    /** Assign focus style with desire color */
    mainColor: string;
}>;

const getFocusOverrides =
    (props?: Props) =>
    ({ theme }: PropsWithThemeType) => {
        const getOverrides = getComponentOverride('FocusState')({ theme });
        return getOverrides?.(props);
    };

export const getOutlineFocusStyleFromColor = (
    mainColor: string,
): FlattenSimpleInterpolation => {
    return css`
        outline: ${color(mainColor, 0.4)} solid ${spacing(1)};
    ` as FlattenSimpleInterpolation;
};

export const getFocusStyleFromColor = (
    mainColor: string,
    outlineColor?: string,
): FlattenSimpleInterpolation => {
    return css`
        outline: ${color(outlineColor || mainColor)} solid 1px;
        box-shadow: 0 0 0 ${spacing(1)} ${color(mainColor, 0.4)};
    ` as FlattenSimpleInterpolation;
};

const getFocusStyle = (props: Props): FlattenSimpleInterpolation => {
    const { error, filled, noOutline, mainColor } = props;

    let result = css`
        ${transition({ outline: true, 'box-shadow': true })};
    `;

    if (mainColor) {
        result = css`
            ${result};
            ${getFocusStyleFromColor(mainColor)};
        `;
    } else if (error) {
        result = css`
            ${result};
            ${getFocusStyleFromColor('error.07')};
        `;
    } else if (filled) {
        result = css`
            ${result};
            ${getFocusStyleFromColor('primary.07', 'neutral.00')};
        `;
    } else {
        result = css`
            ${result};
            ${getFocusStyleFromColor('primary.07')};
        `;
    }

    if (noOutline) {
        result = css`
            ${result};
            outline-width: 0;
        `;
    }

    result = css`
        ${result}
        ${getFocusOverrides(props)}
    `;

    return result as FlattenSimpleInterpolation;
};

export const resetFocus = (): FlattenSimpleInterpolation => {
    return css`
        &:focus,
        &:focus-visible,
        &:focus-within {
            outline: unset;
            box-shadow: unset;
        }
    `;
};

/**
 * Set focus style for the current and all children (focusable elements only),
 * depending on which state of the components, the style will update accordingly
 */
export const focus =
    (props?: Props) => (): FlattenSimpleInterpolation | string => {
        const { disabled, ...restProps } = props || {};

        if (disabled) {
            return ``;
        }

        const focusStyle = getFocusStyle(restProps);

        return css`
            &:focus-visible {
                ${focusStyle}
            }

            * {
                &:focus-visible {
                    ${focusStyle}
                }
            }
        ` as FlattenSimpleInterpolation;
    };

/**
 * Reset all children focus styles, set the focus style for the current element only,
 * this is useful in cases like the `Search` component (wraps the `TextInput` that already have focus style)
 */
export const focusWithin =
    (props?: Props) => (): FlattenSimpleInterpolation | string => {
        const { disabled, ...restProps } = props || {};

        if (disabled) {
            return ``;
        }

        const focusStyle = getFocusStyle(restProps);

        return css`
            * {
                ${resetFocus};
            }

            &:focus-within {
                ${focusStyle};
            }
        ` as FlattenSimpleInterpolation;
    };
