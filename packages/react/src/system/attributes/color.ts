import { css } from 'styled-components';
import { replaceThemeToken } from '../util/replaceThemeToken';
import { ThemeType } from '../../styling';

export type ColorAttributesType = {
    /**
     * Sets *CSS* `color` property of **.${nodeName}**. Can accept either a color `hex code`, or a Level-2 color token from a theme. Example: `color="primary.main"` will produce `color: #0b53bf`
     * @armor-docs-group color
     */
    color?: string;
    /**
     * @armor-docs-group color
     */
    hoverColor?: string;
};

export const colorAttributesList = {
    color: true,
    hoverColor: true,
};

const replaceColor = (colorName: string, theme: ThemeType) => {
    if (colorName.startsWith('$')) {
        return replaceThemeToken(colorName, theme).value;
    }

    const prefixedColorName = `$color.${colorName}`;
    if (prefixedColorName in theme.referenceIndex) {
        return theme.referenceIndex[prefixedColorName];
    }

    return colorName;
};

export const colorAttributes = ({
    color,
    hoverColor,
    theme,
}: ColorAttributesType & { theme: ThemeType }) => css`
    ${color !== undefined && `color: ${replaceColor(color, theme)};`}
    ${hoverColor !== undefined &&
        `&:hover { color: ${replaceColor(hoverColor, theme)}; }`}
`;
