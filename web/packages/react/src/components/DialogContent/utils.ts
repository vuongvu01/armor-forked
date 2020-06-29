import { useCallback, useMemo, useRef, MouseEvent } from 'react';

import { returnEmptyString, makeClassName } from 'src/utils';
import { DialogContentStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useDialogContentStylesOverride = (
    styles?: DialogContentStylesPropsType,
): Required<DialogContentStylesPropsType> =>
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
        (e: MouseEvent<unknown>) => {
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
