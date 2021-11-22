import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    return makeBEM(classPrefix, component);
};

export const useSearchSuggestionItemClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            SuggestionsItem: appendClassName(
                getClassNameByComponent({
                    component: 'SuggestionsItem',
                    classPrefix,
                }),
                className,
            ),
            SuggestionItemContainer: getClassNameByComponent({
                component: 'SuggestionItemContainer',
                classPrefix,
            }),
            SuggestionsItemIcon: getClassNameByComponent({
                component: 'SuggestionsItemIcon',
                classPrefix,
            }),
            SuggestionsItemLabel: getClassNameByComponent({
                component: 'SuggestionsItemLabel',
                classPrefix,
            }),
            SuggestionsItemAction: getClassNameByComponent({
                component: 'SuggestionsItemAction',
                classPrefix,
            }),
            LabelTypography: getClassNameByComponent({
                component: 'LabelTypography',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);
