import { RootThemeType, ThemeType } from '../../styling';

export const expansion = (degree = 180) => ({
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
