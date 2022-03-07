import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

const withOpacity = (colorHex: string, opacity: number) => {
    const opacityHex = (opacity + 0x10000).toString(16).slice(-2).toUpperCase();
    return `${colorHex}${opacityHex}`;
};

export const color =
    (name: string, opacity?: number) =>
    ({ theme }: PropsWithThemeType): string => {
        const currentTheme = getAvailableTheme(theme);

        const tokenName = `color.${name}`;

        if (tokenName in currentTheme.referenceIndex) {
            const colorHex = currentTheme.referenceIndex[tokenName] as string;

            return opacity ? withOpacity(colorHex, opacity) : colorHex;
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
