import { useMemo } from 'react';

import { ClassNamesType } from '../components/type';
import { transformTheme } from '../styling/theme/transformTheme';
import { makeClassName, merge } from '.';
import { ThemeType, useTheme } from '../styling';
import { ObjectLiteralType } from '../type';

/**
 * @internal
 */
export const useClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    elementType = 'Root',
) =>
    useMemo(() => {
        return makeClassName(classPrefix, className, classNames, elementType);
    }, [classPrefix, elementType, className, classNames]);

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
