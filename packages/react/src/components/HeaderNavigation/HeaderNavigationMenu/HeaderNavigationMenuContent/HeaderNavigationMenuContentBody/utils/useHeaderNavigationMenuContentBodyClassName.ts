import { useMemo } from 'react';

import { ClassNamesType } from '../../../../../type';
import { makeClassName } from '../../../../../../utils';

const useHeaderNavigationMenuContentBodyClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames, 'Root'),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationMenuContentBodyClassName;
