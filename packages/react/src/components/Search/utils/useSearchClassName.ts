import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
    disabled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useSearchClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                }),
                className,
            ),
            SuggestionsContainer: getClassNameByComponent({
                component: 'SuggestionsContainer',
                classPrefix,
                disabled,
            }),
            SuggestionsItem: getClassNameByComponent({
                component: 'SuggestionsItem',
                classPrefix,
                disabled,
            }),
            SuggestionsItemIcon: getClassNameByComponent({
                component: 'SuggestionsItemIcon',
                classPrefix,
                disabled,
            }),
            SuggestionsItemLabel: getClassNameByComponent({
                component: 'SuggestionsItemLabel',
                classPrefix,
                disabled,
            }),
            SuggestionsItemAction: getClassNameByComponent({
                component: 'SuggestionsItemAction',
                classPrefix,
                disabled,
            }),
            SearchSuggestionsList: getClassNameByComponent({
                component: 'SearchSuggestionsList',
                classPrefix,
                disabled,
            }),
            TextInput: getClassNameByComponent({
                component: 'TextInput',
                classPrefix,
                disabled,
            }),
            ListItemGroup: makeBEM(classPrefix, 'ListItemGroup'),
        };
    }, [classPrefix, className, disabled]);
