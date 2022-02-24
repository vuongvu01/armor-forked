import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';
import { getToken } from './token';

export const pixelToRemToken =
    (name: string) =>
    (props: PropsWithThemeType): ScalarType => {
        const value = getToken(props, name);
        const { theme } = props;
        if (theme) {
            if (theme.armor) {
                return theme.armor.typography.pixelToRem(value);
            }

            return theme.typography.pixelToRem(value);
        }

        return value;
    };
