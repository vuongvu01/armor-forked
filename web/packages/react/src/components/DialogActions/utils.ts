import { useMemo } from 'react';
import { DialogActionsStylesPropsType } from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useDialogActionsStylesOverride = (
    styles?: DialogActionsStylesPropsType,
): Required<DialogActionsStylesPropsType> =>
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
