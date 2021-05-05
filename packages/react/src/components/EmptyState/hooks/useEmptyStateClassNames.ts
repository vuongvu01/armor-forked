import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../utils';

export const useEmptyStateClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Title: makeBEM(classPrefix, 'Title'),
            Description: makeBEM(classPrefix, 'Description'),
            ActionsContainer: makeBEM(classPrefix, 'Actions'),
            ImageContainer: makeBEM(classPrefix, 'Image'),
            HorizontalLayout: makeBEM(classPrefix, 'Horizontal'),
            VerticalLayout: makeBEM(classPrefix, 'Vertical'),
            EmptyStateContainer: makeBEM(classPrefix, 'Container'),
        };
    }, [classPrefix, className]);
