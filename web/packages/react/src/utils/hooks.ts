import { useMemo, useEffect } from 'react';
import merge from 'deepmerge';
import { ClassNamesType } from '../components/type';
import { makeClassName } from './index';
import { ThemeType } from '../styling';
import { defaultThemeDeclaration } from '../styling/themes/defaultThemeDeclaration';
import { ObjectLiteralType } from '../type';
import { transformTheme } from '../styling/make/transform-theme';

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

const overwriteMerge = (destinationArray: any[], sourceArray: any[]) =>
    sourceArray;

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
                theme.components[classPrefix] || {},
                {
                    arrayMerge: overwriteMerge,
                },
            );

            // eslint-disable-next-line no-param-reassign
            theme.componentOverrides[classPrefix] = transformTheme(
                theme,
                chunk,
            );
        }

        return true;
    }, [classPrefix, theme, defaultComponentTheme]);
