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
            Controller: makeBEM(classPrefix, 'Controller'),
            Icon: makeBEM(classPrefix, 'Icon'),
        };
    }, [classPrefix, className]);
