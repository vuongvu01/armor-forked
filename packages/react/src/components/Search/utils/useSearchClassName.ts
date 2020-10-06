import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { ClassBasedOnComponentType } from '../type';
import { makeBEM, makeClassName } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useSearchClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
) =>
    useMemo(() => {
        return {
            Root: getClassNameByComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsContainer: getClassNameByComponent({
                component: 'SuggestionsContainer',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsItem: getClassNameByComponent({
                component: 'SuggestionsItem',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsItemIcon: getClassNameByComponent({
                component: 'SuggestionsItemIcon',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsItemLabel: getClassNameByComponent({
                component: 'SuggestionsItemLabel',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsItemAction: getClassNameByComponent({
                component: 'SuggestionsItemAction',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            SuggestionsList: getClassNameByComponent({
                component: 'SuggestionsList',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            TextInput: getClassNameByComponent({
                component: 'TextInput',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
        };
    }, [classPrefix, className, classNames, disabled]);
