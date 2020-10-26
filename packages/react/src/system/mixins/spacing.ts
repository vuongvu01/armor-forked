import { ObjectLiteralType, ScalarType } from '../../type';
import { ThemeType } from '../../styling';

export const spacing = (value: ScalarType = 1) => ({
    theme,
}: ObjectLiteralType & { theme: ThemeType }) => {
    if (theme.armor) {
        return theme.armor.spacing(value);
    }

    return theme.spacing(value);
};
