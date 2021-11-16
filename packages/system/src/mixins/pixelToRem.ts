import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';

export const pixelToRem = (value: ScalarType = 1) => ({
    theme,
}: PropsWithThemeType): ScalarType => {
    if (theme) {
        if (theme.armor) {
            return theme.armor.typography.pixelToRem(value);
        }

        return theme.typography.pixelToRem(value);
    }

    return value;
};
