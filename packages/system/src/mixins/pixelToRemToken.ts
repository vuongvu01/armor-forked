import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';
import { getToken } from './token';
import { getAvailableTheme } from '../theme/util';

export const pixelToRemToken =
    (name: string) =>
    (props: PropsWithThemeType): ScalarType => {
        const value = getToken(props, name);
        const { theme } = props;

        return getAvailableTheme(theme).typography.pixelToRem(value);
    };
