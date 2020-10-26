import { useMemo } from 'react';
import { makeBEM, makeClassName } from '../../../utils';
import { ClassNamesType } from '../../type';

export const useDataTableClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    exampleProperty?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (exampleProperty) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'example'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
        };
    }, [classPrefix, className, classNames, exampleProperty]);
