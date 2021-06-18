import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useFilterViewerClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            AddFiltersButton: makeBEM(classPrefix, 'AddFiltersButton'),
            TopBar: makeBEM(classPrefix, 'TopBar'),
            TopBarTitle: makeBEM(classPrefix, 'TopBarTitle'),
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
