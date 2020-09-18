import { css } from 'styled-components';
import { replaceThemeToken } from '../util/replaceThemeToken';
import { ThemeType } from '../../styling';

export type ColorAttributesType = {
    color?: string;
    hoverColor?: string;
};

export const colorAttributesList = {
    color: true,
    hoverColor: true,
};

export const colorAttributes = ({
    color,
    hoverColor,
    theme,
}: ColorAttributesType & { theme: ThemeType }) =>
    css`
        ${color !== undefined &&
            `color: ${replaceThemeToken(color, theme).value};`}
        ${hoverColor !== undefined &&
            `&:hover { color: ${replaceThemeToken(hoverColor, theme).value}; }`}
    `;
