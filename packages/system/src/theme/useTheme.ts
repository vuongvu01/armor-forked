import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';

import { makeDefaultThemeCached } from './makeDefaultTheme';
import { RootThemeType } from './type';
import { makeArmorSubTheme } from './makeArmorSubTheme';

const useStyledComponentsTheme = () => useContext<RootThemeType>(ThemeContext);

export const useTheme = (theme?: RootThemeType): RootThemeType => {
    const styledComponentsTheme = useStyledComponentsTheme();

    return useMemo(() => {
        if (styledComponentsTheme) {
            if (!styledComponentsTheme.armor?.$initialized) {
                // if somebody provides a theme without armor sub-namespace, then we create one automatically
                styledComponentsTheme.armor = makeArmorSubTheme(
                    styledComponentsTheme.armor,
                );
            }

            return styledComponentsTheme;
        }

        // no provider - just return the cached default theme
        return makeDefaultThemeCached();
    }, [theme, styledComponentsTheme]);
};
