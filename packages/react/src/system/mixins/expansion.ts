import { RootThemeType, ThemeType } from '../../styling';

export const expansion = (degree = 180) => ({
    theme,
    expanded,
}: {
    expanded?: boolean;
    theme?: ThemeType | RootThemeType;
}) => {
    if (expanded) {
        return `transform: rotate(${degree}deg);`;
    }

    return '';
};
