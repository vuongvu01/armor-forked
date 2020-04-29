import { useCallback, useMemo, useRef } from 'react';
import {
    DialogContentStyleOverrideType,
    DialogContentStyleOverrideSafeType,
} from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogContentStylesOverride = (
    styles?: DialogContentStyleOverrideType,
): DialogContentStyleOverrideSafeType =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useDialogContentClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => makeClassName(classPrefix, className, classNames), [
        classPrefix,
        className,
        classNames,
    ]);

export const useContainerClickTrap = (
    onClose?: () => void,
    disableOverlay?: boolean,
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onContainerClick = useCallback(
        (e: Event) => {
            if (
                e.target === containerRef.current &&
                !disableOverlay &&
                onClose
            ) {
                onClose();
            }
        },
        [containerRef, disableOverlay, onClose],
    );

    return {
        onContainerClick,
        containerRef,
    };
};
