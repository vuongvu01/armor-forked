import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

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
            // SubNode: makeBEM(
            //     classPrefix,
            //     'SubNode',
            // ),
        };
    }, [
        classPrefix,
        className,
    ]);
