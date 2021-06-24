import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useListItemClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            PrimaryListItem: makeBEM(classPrefix, 'Primary-Item'),
            SecondaryListItem: makeBEM(classPrefix, 'Secondary-List'),
            PrimaryIconsContainer: makeBEM(classPrefix, 'Primary-Icons'),
            PrimaryListItemContainer: makeBEM(
                classPrefix,
                'Primary-Item-Container',
            ),
            PrimaryLead: makeBEM(classPrefix, 'Lead'),
            PrimarySubtitle: makeBEM(classPrefix, 'Subtitle'),
            ActionsContainer: makeBEM(classPrefix, 'Actions-Container'),
        };
    }, [classPrefix, className]);
