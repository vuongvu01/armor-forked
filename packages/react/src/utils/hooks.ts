import { useMemo } from 'react';

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
        if (!(classPrefix in theme.armor.componentOverrides)) {
            let override = {};

            if (defaultComponentTheme) {
                const chunk = merge(
                    defaultComponentTheme,
                    theme.armor.components[classPrefix],
                );

                override = transformTheme(theme.armor, chunk, classPrefix);
            }

            // eslint-disable-next-line no-param-reassign
            theme.armor.componentOverrides[classPrefix] = override;
        }

        return true;
    }, [classPrefix, theme, defaultComponentTheme]);

    return theme.armor as ThemeType;
};
