import { useMemo } from 'react';
import { ButtonStylesPropsType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useButtonStylesOverride = (
    styles?: ButtonStylesPropsType,
): Required<ButtonStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useButtonClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    small?: boolean,
    wide?: boolean,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
) =>
    useMemo(() => {
        const baseClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const stateClassNames: string[] = [];
        if (disabled) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'disabled'));
        }
        if (small) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'small'));
        }
        if (wide) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'wide'));
        }
        if (primary && !secondary && !tertiary && !danger) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'primary'));
        }
        if (secondary) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'secondary'));
        }
        if (tertiary) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'tertiary'));
        }
        if (danger) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'danger'));
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
        danger,
    ]);
