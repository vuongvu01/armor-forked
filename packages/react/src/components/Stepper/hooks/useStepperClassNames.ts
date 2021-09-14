import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../utils';

export const useStepperClassNames = (
    classPrefix: string,
    className?: string,
    vertical?: boolean,
    minimal?: boolean,
) =>
    useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);
        const stateClassNames: string[] = [];

        if (vertical) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'vertical'));
        }

        if (minimal) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'minimal'));
        }

        return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
    }, [classPrefix, className, vertical]);
