import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';
import capitalize from 'lodash/capitalize';

export const useTableCellClassNames = (
    classPrefix: string,
    className?: string,
    stickyAlignment?: string,
    stickyVisible?: boolean,
    stickyTop?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);

        const makeRootModifier = (modifier: string) =>
            `${rootClassNames}--${modifier}`;

        return {
            Root: [
                rootClassNames,
                stickyAlignment && makeRootModifier(`sticky`),
                stickyAlignment &&
                    makeRootModifier(
                        `sticky${capitalize(stickyAlignment)}Column`,
                    ),
                stickyVisible && makeRootModifier('stickyVisible'),
                stickyTop && makeRootModifier('stickyTop'),
            ]
                .filter(Boolean)
                .join(' '),
        };
    }, [classPrefix, className, stickyAlignment, stickyVisible, stickyTop]);
