import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../utils';

export const useButtonClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    small?: boolean,
    wide?: boolean,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
) =>
    useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);
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
        if (primary && !secondary && !tertiary) {
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

        return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
    }, [
        classPrefix,
        className,
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
        danger,
    ]);
