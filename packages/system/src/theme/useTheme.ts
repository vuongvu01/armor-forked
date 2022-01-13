import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';

import { makeDefaultTheme } from './makeDefaultTheme';

import { RootThemeType } from './type';
import { makeArmorSubTheme } from './makeArmorSubTheme';

const useStyledComponentsTheme = () => useContext<RootThemeType>(ThemeContext);
export const useTheme = (theme?: RootThemeType): RootThemeType => {
    const styledComponentsTheme = useStyledComponentsTheme() as RootThemeType;

    return useMemo(() => {
        if (theme) {
            return theme;
        }
        if (styledComponentsTheme) {
            // if somebody provides a theme without armor sub-namespace, then we create one automatically
            if (
                !styledComponentsTheme.armor ||
                !styledComponentsTheme.armor.$initialized
            ) {
                styledComponentsTheme.armor = makeArmorSubTheme(
                    styledComponentsTheme.armor,
                );
            }

            return styledComponentsTheme;
        }

        return makeDefaultTheme();
    }, [theme, styledComponentsTheme]);
};