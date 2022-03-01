import { useMemo } from 'react';

import cloneDeep from 'clone-deep';
import { transformTheme } from './transformTheme';
import { merge } from '../util';
import { ThemeType, useTheme } from './index';

/**
 * @internal
 * @deprecated
 */
export const useComponentTheme = (
    classPrefix: string,
    defaultComponentTheme?: Record<string, any>, // todo: tighten
): ThemeType => {
    const theme = useTheme();

    // useMemo(() => {
    //     const { armor } = theme;
    //     if (!(classPrefix in armor.componentOverrides)) {
    //         let override = {};
    //         const { components } = armor;
    //
    //         if (defaultComponentTheme) {
    //             const chunk = merge(
    //                 defaultComponentTheme,
    //                 components[classPrefix],
    //             );
    //
    //             override = transformTheme(armor, chunk, classPrefix);
    //         } else {
    //             override =
    //                 classPrefix in components
    //                     ? cloneDeep(components[classPrefix])
    //                     : {};
    //         }
    //
    //         // eslint-disable-next-line no-param-reassign
    //         armor.componentOverrides[classPrefix] = override;
    //     }
    //
    //     return true;
    // }, [classPrefix, theme, defaultComponentTheme]);

    return theme.armor as ThemeType;
};
