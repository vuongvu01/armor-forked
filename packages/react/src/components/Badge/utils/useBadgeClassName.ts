import { useMemo } from 'react';
import { appendClassName, makeBEM } from '../../../utils';

export const useBadgeClassName = (classPrefix: string, className?: string) =>
    useMemo(
        () => ({
            Root: appendClassName(makeBEM(classPrefix, 'Root'), className),
        }),
        [classPrefix, className],
    );
