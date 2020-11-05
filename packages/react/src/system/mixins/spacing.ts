import { ObjectLiteralType, ScalarType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const spacing = (value: ScalarType = 1) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        if (theme.armor) {
            return theme.armor.spacing(value);
        }

        return theme.spacing(value);
    }

    return value;
};
