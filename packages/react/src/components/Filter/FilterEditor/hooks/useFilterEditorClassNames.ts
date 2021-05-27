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
            Fields: makeBEM(classPrefix, 'Fields'),
            Field: makeBEM(classPrefix, 'Field'),
            Actions: makeBEM(classPrefix, 'Actions'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            ApplyButton: makeBEM(classPrefix, 'ApplyButton'),
        };
    }, [classPrefix, className]);
