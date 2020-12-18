import { css } from 'styled-components';
import { replaceThemeToken } from '../../utils/replaceThemeToken';
import { ThemeType } from '../../styling/type';

export type ColorAttributesType = {
    color?: string;
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
