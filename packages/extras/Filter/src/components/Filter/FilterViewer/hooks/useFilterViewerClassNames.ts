import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFilterViewerClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            AddFiltersButton: makeBEM(classPrefix, 'AddFiltersButton'),
            AddFiltersButtonWrapper: makeBEM(
                classPrefix,
                'AddFiltersButtonWrapper',
            ),
            TopBar: makeBEM(classPrefix, 'TopBar'),
            TopBarSummary: makeBEM(classPrefix, 'Summary'),
            TopBarTitle: makeBEM(classPrefix, 'TopBarTitle'),
            TopBarResultCount: makeBEM(classPrefix, 'TopBarResultCount'),
            Actions: makeBEM(classPrefix, 'Actions'),
            EditFiltersButton: makeBEM(classPrefix, 'EditFiltersButton'),
            ClearFiltersButton: makeBEM(classPrefix, 'ClearFiltersButton'),
            ClearFiltersConfirmation: makeBEM(
                classPrefix,
                'ClearFiltersConfirmation',
            ),
            ClearFiltersConfirmationTitle: makeBEM(
                classPrefix,
                'ClearFiltersConfirmationTitle',
            ),
            ClearFiltersConfirmationDescription: makeBEM(
                classPrefix,
                'ClearFiltersConfirmationDescription',
            ),
            ClearFiltersConfirmationCancelButton: makeBEM(
                classPrefix,
                'ClearFiltersConfirmationCancelButton',
            ),
            ClearFiltersConfirmationConfirmButton: makeBEM(
                classPrefix,
                'ClearFiltersConfirmationConfirmButton',
            ),
            Conditions: makeBEM(classPrefix, 'Conditions'),
            AddFilterHint: makeBEM(classPrefix, 'AddFilterHint'),
        };
    }, [classPrefix, className]);
