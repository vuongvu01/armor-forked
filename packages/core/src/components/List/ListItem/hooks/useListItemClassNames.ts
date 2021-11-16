import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useListItemClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            PrimaryListItem: makeBEM(classPrefix, 'PrimaryListItem'),
            SecondaryListItem: makeBEM(classPrefix, 'SecondaryListItem'),
            PrimaryIconContainer: makeBEM(classPrefix, 'PrimaryIconContainer'),
            PrimaryListItemContainer: makeBEM(
                classPrefix,
                'PrimaryListItemContainer',
            ),
            PrimaryLeadSubtitle: makeBEM(classPrefix, 'PrimaryLeadSubtitle'),
            ActionsContainer: makeBEM(classPrefix, 'ActionsContainer'),
            PrimaryIconWrapper: makeBEM(classPrefix, 'PrimaryIconWrapper'),
        };
    }, [classPrefix, className]);
