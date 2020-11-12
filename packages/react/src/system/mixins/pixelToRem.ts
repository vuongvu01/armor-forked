import { ObjectLiteralType, ScalarType } from '../../type';
import { ThemeType, RootThemeType } from '../../styling';

export const pixelToRem = (value: ScalarType = 1) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        if (theme.armor) {
            return theme.armor.typography.pixelToRem(value);
        }

        return theme.typography.pixelToRem(value);
    }

    return value;
};
