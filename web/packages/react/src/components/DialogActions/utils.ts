import { useMemo } from 'react';
import {
    DialogActionsStyleOverrideType,
    DialogActionsStyleOverrideSafeType,
} from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useStylesOverrideDialogActions = (
    styles?: DialogActionsStyleOverrideType,
): DialogActionsStyleOverrideSafeType => {
    return useMemo(() => {
        const { Root } = styles || {};
        return {
            Root: Root || returnEmptyString,
        };
    }, [styles]);
};

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
