import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';
import * as colors from '../tokens/color';

/**
 * Convert color from hex value with opacity to #rrggbbaa notion, accept opacity value from 0 to 1
 */
const withOpacity = (colorHex: string, opacity: number) => {
    const opacityHex = Math.round(opacity * 255).toString(16);
    return `${colorHex}${
        opacityHex.length === 1 ? `0${opacityHex}` : opacityHex
    }`;
};

export const color =
    (name: string, opacity?: number) =>
    ({ theme }: PropsWithThemeType): string => {
        const currentTheme = getAvailableTheme(theme);

        const tokenName = `color.${name}`;

        if (tokenName in currentTheme.referenceIndex) {
            const colorHex = currentTheme.referenceIndex[tokenName] as string;

            return opacity || opacity === 0
                ? withOpacity(colorHex, opacity)
                : colorHex;
        }

        if (name in colors) {
            const colorHex = (colors as any)[name];

            return opacity || opacity === 0
                ? withOpacity(colorHex, opacity)
                : colorHex;
        }

        return name;
    };

// this function exists only because of the backward compatibility
export const colorToken =
    (name: string) =>
    ({ theme }: PropsWithThemeType): string => {
        const currentTheme = getAvailableTheme(theme);

        let tokenName = '';
        let value = name;
        if (name.startsWith('$')) {
            // supporting backward compatibility
            tokenName = name.substr(1);
            value = '';
        } else {
            tokenName = `color.${name}`;
        }

        if (tokenName in currentTheme.referenceIndex) {
            value = currentTheme.referenceIndex[tokenName] as string;
        }

        return value;
    };
