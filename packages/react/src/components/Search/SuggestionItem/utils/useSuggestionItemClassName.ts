import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { makeClassName } from '../../../../utils';
import { ClassNamesType } from '../../../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
}: ClassBasedOnComponentType) => {
    return makeClassName(classPrefix, className, classNames, component);
};

export const useSuggestionItemClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            SuggestionsItem: getClassNameByComponent({
                component: 'SuggestionsItem',
                classPrefix,
                className,
                classNames,
            }),
            SuggestionsItemIcon: getClassNameByComponent({
                component: 'SuggestionsItemIcon',
                classPrefix,
                className,
                classNames,
            }),
            SuggestionsItemLabel: getClassNameByComponent({
                component: 'SuggestionsItemLabel',
                classPrefix,
                className,
                classNames,
            }),
            SuggestionsItemAction: getClassNameByComponent({
                component: 'SuggestionsItemAction',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);
