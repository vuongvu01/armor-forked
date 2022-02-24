import { PropsWithThemeType } from './type';

export const getComponentOverride =
    (componentName: string) =>
    ({ theme }: PropsWithThemeType) => {
        if (theme) {
            // todo: theme.armor later
            const { componentCSS } = theme;

            if (componentCSS && componentName in componentCSS) {
                return componentCSS[componentName];
            }
        }

        return null;
    };
