import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../utils';

export const use<%- component_name_pascal %>ClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(
                classPrefix,
                className,
            ),
            SubNode: makeBEM(
                classPrefix,
                'SubNode',
            ),
        };
    }, [
        classPrefix,
        className,
    ]);