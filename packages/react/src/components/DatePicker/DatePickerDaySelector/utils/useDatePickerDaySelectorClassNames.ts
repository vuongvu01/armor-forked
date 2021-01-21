import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerDaySelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            // SubNode: makeBEM(
            //     classPrefix,
            //     'SubNode',
            // ),
        };
    }, [classPrefix, className]);
