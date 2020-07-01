import { useMemo } from 'react';

import { returnEmptyString, makeClassName } from 'src/utils';
import { DialogActionsStylesPropsType } from './type';
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
