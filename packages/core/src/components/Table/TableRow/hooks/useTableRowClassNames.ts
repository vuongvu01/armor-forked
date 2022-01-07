import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';
import { joinClasses } from '../../../../helpers/joinClasses';

export const useTableRowClassNames = (
    classPrefix: string,
    className?: string,
    isHovered?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const isHoveredClassName = isHovered ? 'TableRow--hovered' : '';

        return {
            Root: joinClasses(rootClassNames, isHoveredClassName),
        };
    }, [classPrefix, className, isHovered]);
