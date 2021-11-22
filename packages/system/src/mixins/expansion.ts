import { RootThemeType, ThemeType } from '../theme';

export const expansion = (degree = 180) => ({
    expanded,
}: {
    expanded?: boolean;
    theme?: ThemeType | RootThemeType;
}): string => {
    if (expanded) {
        return `transform: rotate(${degree}deg);`;
    }

    return '';
};
