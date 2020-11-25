import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../utils';

export const useMessageClassNames = (classPrefix: string, className?: string) =>
    useMemo(
        () => ({
            Root: makeRootClassName(classPrefix, className),
            Icon: makeBEM(classPrefix, 'Icon'),
            Content: makeBEM(classPrefix, 'Content'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            Central: makeBEM(classPrefix, 'Central'),
            Actions: makeBEM(classPrefix, 'Actions'),
            Extra: makeBEM(classPrefix, 'Extra'),
        }),
        [classPrefix, className],
    );
