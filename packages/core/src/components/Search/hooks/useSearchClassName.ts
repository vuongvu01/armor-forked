import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    disabled,
    isSuggestionsListShown,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }
    if (!isSuggestionsListShown) {
        stateClassNames.push(
            makeBEM(classPrefix, component, 'hidden_suggestions'),
        );
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useSearchClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    isSuggestionsListShown?: boolean,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    isSuggestionsListShown,
                }),
                className,
            ),
            SuggestionsContainer: getClassNameByComponent({
                component: 'SuggestionsContainer',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            SuggestionsItem: getClassNameByComponent({
                component: 'SuggestionsItem',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            SuggestionsItemIcon: getClassNameByComponent({
                component: 'SuggestionsItemIcon',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            SuggestionsItemLabel: getClassNameByComponent({
                component: 'SuggestionsItemLabel',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            SuggestionsItemAction: getClassNameByComponent({
                component: 'SuggestionsItemAction',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            SearchSuggestionsList: getClassNameByComponent({
                component: 'SearchSuggestionsList',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            TextInput: getClassNameByComponent({
                component: 'TextInput',
                classPrefix,
                disabled,
                isSuggestionsListShown,
            }),
            ListItemGroup: makeBEM(classPrefix, 'ListItemGroup'),
        };
    }, [classPrefix, disabled, isSuggestionsListShown, className]);
