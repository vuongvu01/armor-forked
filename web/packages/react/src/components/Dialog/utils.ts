import { useMemo } from 'react';
import { DialogStyleOverrideType, DialogStyleOverrideSafeType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogStylesOverride = (
    styles?: DialogStyleOverrideType,
): DialogStyleOverrideSafeType => {
    return useMemo(
        () => ({
            Root: returnEmptyString,
            AlignmentContainer: returnEmptyString,
            Overlay: returnEmptyString,
            CloseButton: returnEmptyString,
            Content: returnEmptyString,
            ...styles,
        }),
        [styles],
    );
};

export const useDialogClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Overlay: makeClassName(
                classPrefix,
                className,
                classNames,
                'Overlay',
            ),
            AlignmentContainer: makeClassName(
                classPrefix,
                className,
                classNames,
                'AlignmentContainer',
            ),
            Root: makeClassName(classPrefix, className, classNames),
            CloseButton: makeClassName(
                classPrefix,
                className,
                classNames,
                'CloseButton',
            ),
            Content: makeClassName(
                classPrefix,
                className,
                classNames,
                'Content',
            ),
        };
    }, [classPrefix, className, classNames]);
