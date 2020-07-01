import { useMemo } from 'react';

import { returnEmptyString, makeBEM, makeClassName } from 'src/utils';
import { MessageActionStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useMessageActionStylesOverride = (
    styles?: MessageActionStylesPropsType,
): Required<MessageActionStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useMessageActionClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    useMessageColor?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (useMessageColor) {
            rootStateClassNames.push(
                makeBEM(classPrefix, 'Root', 'use-message-color'),
            );
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
        };
    }, [classPrefix, className, classNames]);
