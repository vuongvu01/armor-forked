import { useMemo } from 'react';

import { appendClassName, makeBEM } from '../../../utils';

export const useOptionListFooterClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(makeBEM(classPrefix, 'Root'), className),
            CancelButton: makeBEM(classPrefix, 'CancelButton'),
            ConfirmButton: makeBEM(classPrefix, 'ConfirmButton'),
        }),
        [classPrefix, className, disabled],
    );
