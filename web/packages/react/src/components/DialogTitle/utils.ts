import { useMemo } from 'react';
import {
    DialogTitleStyleOverrideType,
    DialogTitleStyleOverrideSafeType,
} from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogTitleStylesOverride = (
    styles?: DialogTitleStyleOverrideType,
): DialogTitleStyleOverrideSafeType => {
    return useMemo(() => {
        const { Root, Text, Description } = styles || {};
        return {
            Root: Root || returnEmptyString,
            Text: Text || returnEmptyString,
            Description: Description || returnEmptyString,
        };
    }, [styles]);
};

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
