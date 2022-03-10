import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const getComponentOverride =
    (componentName: string) =>
    ({ theme }: PropsWithThemeType) => {
        const { componentCSS } = getAvailableTheme(theme);
        if (componentCSS && componentName in componentCSS) {
            return componentCSS[componentName];
        }

        return null;
    };
