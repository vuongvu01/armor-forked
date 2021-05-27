import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../../utils';

export const useFilterViewerTagClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Label: makeBEM(classPrefix, 'Label'),
            Value: makeBEM(classPrefix, 'Value'),
            ValueSegment: makeBEM(classPrefix, 'ValueSegment'),
            ValueMoreLink: makeBEM(classPrefix, 'ValueMoreLink'),
            ValueTailElement: makeBEM(classPrefix, 'ValueTailElement'),
            CloseIconContainer: makeBEM(classPrefix, 'CloseIconContainer'),
        };
    }, [classPrefix, className]);
