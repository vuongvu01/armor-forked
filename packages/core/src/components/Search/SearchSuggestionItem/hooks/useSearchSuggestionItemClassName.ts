import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';
import { SEARCH_ITEM_FOCUSED_CLASS } from '../../constants';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    return makeBEM(classPrefix, component);
};

export const useSearchSuggestionItemClassName = (
    classPrefix: string,
    className?: string,
    isFocused?: boolean,
) =>
    useMemo(() => {
        const suggestionsItemClassName = appendClassName(
            getClassNameByComponent({
                component: 'SuggestionsItem',
                classPrefix,
            }),
            isFocused ? SEARCH_ITEM_FOCUSED_CLASS : '',
        );

        return {
            SuggestionsItem: appendClassName(
                suggestionsItemClassName,
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
    }, [classPrefix, isFocused, className]);
