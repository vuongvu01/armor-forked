import { useMemo } from 'react';

import cloneDeep from 'clone-deep';
import { transformTheme } from '../styling/theme/transformTheme';
import { merge } from '.';
import { ThemeType, useTheme } from '../styling';
import { ObjectLiteralType } from '../type';

/**
 * @internal
 */
export const useComponentTheme = (
    classPrefix: string,
    defaultComponentTheme?: ObjectLiteralType,
) => {
    const theme = useTheme();

    useMemo(() => {
        const { armor } = theme;
        if (!(classPrefix in armor.componentOverrides)) {
            let override = {};
            const { components } = armor;

            if (defaultComponentTheme) {
                const chunk = merge(
                    defaultComponentTheme,
                    components[classPrefix],
                );

                override = transformTheme(armor, chunk, classPrefix);
            } else {
                override =
                    classPrefix in components
                        ? cloneDeep(components[classPrefix])
                        : {};
            }

            // eslint-disable-next-line no-param-reassign
            armor.componentOverrides[classPrefix] = override;
        }

        return true;
    }, [classPrefix, theme, defaultComponentTheme]);

    return theme.armor as ThemeType;
};
