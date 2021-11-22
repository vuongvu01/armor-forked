import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';

export const spacing = (value: ScalarType = 1) => ({
    theme,
}: PropsWithThemeType): ScalarType => {
    if (theme) {
        if (theme.armor) {
            return theme.armor.spacing(value);
        }

        return theme.spacing(value);
    }

    return value;
};
