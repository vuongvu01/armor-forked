import { PropsWithThemeType } from './type';
// import { getAvailableTheme } from '../theme/util';
import { ThemeType } from '../theme';

export const getComponentOverride =
    (componentName: string) =>
    ({ theme }: PropsWithThemeType) => {
        const { componentCSS } = theme as ThemeType;
        // const { componentCSS } = getAvailableTheme(theme); // todo: use this in the next PR
        if (componentCSS && componentName in componentCSS) {
            return componentCSS[componentName];
        }

        return null;
    };
