import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerTimeSelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Input: makeBEM(classPrefix, 'Input'),
            Button: makeBEM(classPrefix, 'Button'),
            TimeSeparatorIcon: makeBEM(classPrefix, 'TimeSeparatorIcon'),
        };
    }, [classPrefix, className]);
