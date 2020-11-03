import { ObjectLiteral, ScalarType } from '../../type';
import { ThemeType, RootThemeType } from '../../styling/type';

export const spacing = (value: ScalarType = 1) => ({
    theme,
}: ObjectLiteral & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        if (theme.armor) {
            return theme.armor.spacing(value);
        }

        return theme.spacing(value);
    }

    return value;
};
