import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useListItemClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            PrimaryListItem: makeBEM(classPrefix, 'PrimaryItem'),
            SecondaryListItem: makeBEM(classPrefix, 'SecondaryList'),
            primaryIconContainer: makeBEM(classPrefix, 'primaryIcon'),
            PrimaryListItemContainer: makeBEM(
                classPrefix,
                'PrimaryItemContainer',
            ),
            PrimaryLeadSubtitle: makeBEM(classPrefix, 'LeadSubtitle'),
            ActionsContainer: makeBEM(classPrefix, 'ActionsContainer'),
            PrimaryIconWrapper: makeBEM(classPrefix, 'PrimaryIconWrapper'),
        };
    }, [classPrefix, className]);
