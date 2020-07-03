import { useMemo } from 'react';

import { ClassNamesType } from '../components/type';
import { transformTheme } from '../styling/make/transform-theme';
import { makeClassName, merge } from '.';
import { ThemeType } from '../styling';
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
export const useThemeOverride = (
    classPrefix: string,
    theme: ThemeType,
    defaultComponentTheme: ObjectLiteralType,
) =>
    // this is supposed to be useEffect(), but we need this code running before the first render
    useMemo(() => {
        if (!(classPrefix in theme.componentOverrides)) {
            const chunk = merge(
                defaultComponentTheme,
                theme.components[classPrefix],
            );

            // eslint-disable-next-line no-param-reassign
            theme.componentOverrides[classPrefix] = transformTheme(
                theme,
                chunk,
            );
        }

        return true;
    }, [classPrefix, theme, defaultComponentTheme]);
