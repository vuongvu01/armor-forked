import { useMemo } from 'react';
import { DialogStyleOverrideType, DialogStyleOverrideSafeType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogStylesOverride = (
    styles?: DialogStyleOverrideType,
): DialogStyleOverrideSafeType => {
    return useMemo(() => {
        const { Root, Overlay, CloseButton, Container } = styles || {};
        return {
            Root: Root || returnEmptyString,
            Container: Container || returnEmptyString,
            Overlay: Overlay || returnEmptyString,
            CloseButton: CloseButton || returnEmptyString,
        };
    }, [styles]);
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
            Container: makeClassName(
                classPrefix,
                className,
                classNames,
                'Container',
            ),
            Root: makeClassName(classPrefix, className, classNames),
            CloseButton: makeClassName(
                classPrefix,
                className,
                classNames,
                'CloseButton',
            ),
        };
    }, [classPrefix, className, classNames]);
