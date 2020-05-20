import { useMemo } from 'react';
import { MessageStylesPropsType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
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
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        // if (exampleProperty) {
        //     rootStateClassNames.push(makeBEM(classPrefix, 'root', 'example'));
        // }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
            Icon: '', // todo
            Content: '', // todo
            CloseButton: '', // todo
            Central: '', // todo
            Actions: '', // todo
            Extra: '', // todo
        };
    }, [classPrefix, className, classNames]);
