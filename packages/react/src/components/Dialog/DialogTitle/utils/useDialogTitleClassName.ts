import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../../utils';

export const useDialogTitleClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Text: makeBEM(classPrefix, 'Text'),
            Description: makeBEM(classPrefix, 'Description'),
        };
    }, [classPrefix, className]);
