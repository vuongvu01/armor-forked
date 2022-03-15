import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const pixelToRem =
    (value: ScalarType = 1) =>
    ({ theme }: PropsWithThemeType): ScalarType =>
        getAvailableTheme(theme).typography.pixelToRem(value);
