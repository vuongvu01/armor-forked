import { useMemo } from 'react';
import { ButtonStyleOverrideType, ButtonStyleOverrideSafeType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useStylesOverrideButton = (
    styles?: ButtonStyleOverrideType,
): ButtonStyleOverrideSafeType => {
    return useMemo(() => {
        const { root } = styles || {};
        return {
            root: root || returnEmptyString,
        };
    }, [styles]);
};

export const useClassNameButton = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    small?: boolean,
    wide?: boolean,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
) =>
    useMemo(() => {
        const baseClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
            'root',
        );
        const stateClassNames: string[] = [];
        if (disabled) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'disabled'));
        }
        if (small) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'small'));
        }
        if (wide) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'wide'));
        }
        if (primary && !secondary && !tertiary) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'primary'));
        }
        if (secondary) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'secondary'));
        }
        if (tertiary) {
            stateClassNames.push(makeBEM(classPrefix, 'root', 'tertiary'));
        }

        return `${baseClassNames} ${stateClassNames.join(' ')}`;
    }, [
        classPrefix,
        className,
        classNames,
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
    ]);
