import { useMemo } from 'react';
import {
    DialogTitleStyleOverrideType,
    DialogTitleStyleOverrideSafeType,
} from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogTitleStylesOverride = (
    styles?: DialogTitleStyleOverrideType,
): DialogTitleStyleOverrideSafeType =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            Text: returnEmptyString,
            Description: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useDialogTitleClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    exampleProperty?: boolean,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
            Text: makeClassName(classPrefix, className, classNames, 'Text'),
            Description: makeClassName(
                classPrefix,
                className,
                classNames,
                'Description',
            ),
        };
    }, [classPrefix, className, classNames, exampleProperty]);
