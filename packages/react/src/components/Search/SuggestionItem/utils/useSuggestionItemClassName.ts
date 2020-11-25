import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    return makeBEM(classPrefix, component);
};

export const useSuggestionItemClassName = (
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
        };
    }, [classPrefix, className]);
