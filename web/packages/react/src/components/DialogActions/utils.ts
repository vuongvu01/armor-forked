import { useMemo } from 'react';
import {
    DialogActionsStyleOverrideType,
    DialogActionsStyleOverrideSafeType,
} from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogActionsStylesOverride = (
    styles?: DialogActionsStyleOverrideType,
): DialogActionsStyleOverrideSafeType =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useDialogActionsClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => makeClassName(classPrefix, className, classNames), [
        classPrefix,
        className,
        classNames,
    ]);
