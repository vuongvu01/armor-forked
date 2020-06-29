import { useMemo } from 'react';

import { returnEmptyString, makeClassName } from 'src/utils';
import { MessageStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useMessageStylesOverride = (
    styles?: MessageStylesPropsType,
): Required<MessageStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            Icon: returnEmptyString,
            Content: returnEmptyString,
            CloseButton: returnEmptyString,
            Central: returnEmptyString,
            Actions: returnEmptyString,
            Extra: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useMessageClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(
        () => ({
            Root: makeClassName(classPrefix, className, classNames),
            Icon: makeClassName(classPrefix, className, classNames, 'Icon'),
            Content: makeClassName(
                classPrefix,
                className,
                classNames,
                'Content',
            ),
            CloseButton: makeClassName(
                classPrefix,
                className,
                classNames,
                'CloseButton',
            ),
            Central: makeClassName(
                classPrefix,
                className,
                classNames,
                'Central',
            ),
            Actions: makeClassName(
                classPrefix,
                className,
                classNames,
                'Actions',
            ),
            Extra: makeClassName(classPrefix, className, classNames, 'Extra'),
        }),
        [classPrefix, className, classNames],
    );
