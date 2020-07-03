import { useMemo } from 'react';

import { returnEmptyString, makeClassName } from '../../utils';
import { DialogTitleStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useDialogTitleStylesOverride = (
    styles?: DialogTitleStylesPropsType,
): Required<DialogTitleStylesPropsType> =>
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
