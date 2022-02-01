import { PropsWithThemeType } from './type';

const withOpacity = (colorHex: string, opacity: number) => {
    const opacityHex = (opacity + 0x10000).toString(16).slice(-2).toUpperCase();
    return `${colorHex}${opacityHex}`;
};

export const color =
    (name: string, opacity?: number) =>
    ({ theme }: PropsWithThemeType): string => {
        if (theme) {
            // todo: use token() mixin here as a proxy
            const currentTheme = theme.armor || theme;
            const prefixedColorName = `$color.${name}`; // todo: when get rid of theme.ts, remove also "$"
            if (prefixedColorName in currentTheme.referenceIndex) {
                const colorHex = currentTheme.referenceIndex[
                    prefixedColorName
                ] as string;
                return opacity ? withOpacity(colorHex, opacity) : colorHex;
            }

            return name;
        }

        return name;
    };
