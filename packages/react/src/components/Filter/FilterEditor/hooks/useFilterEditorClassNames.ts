import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useFilterEditorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Header: makeBEM(classPrefix, 'Header'),
            HeaderTitle: makeBEM(classPrefix, 'HeaderTitle'),
            HeaderClearAllButton: makeBEM(classPrefix, 'HeaderClearAllButton'),
            Conditions: makeBEM(classPrefix, 'Conditions'),
            Condition: makeBEM(classPrefix, 'Condition'),
            Actions: makeBEM(classPrefix, 'Actions'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            ApplyButton: makeBEM(classPrefix, 'ApplyButton'),
            ResultCount: makeBEM(classPrefix, 'ResultCount'),
        };
    }, [classPrefix, className]);
