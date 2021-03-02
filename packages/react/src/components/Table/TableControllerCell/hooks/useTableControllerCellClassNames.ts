import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useTableControllerCellClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Container: makeBEM(classPrefix, 'Container'),
            Trigger: makeBEM(classPrefix, 'Trigger'),
            Icon: makeBEM(classPrefix, 'Icon'),
        };
    }, [classPrefix, className]);
