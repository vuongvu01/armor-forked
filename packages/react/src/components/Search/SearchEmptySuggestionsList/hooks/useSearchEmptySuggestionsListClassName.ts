import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    return makeBEM(classPrefix, component);
};

export const useSearchEmptySuggestionsListClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                }),
                className,
            ),
            ItemIcon: getClassNameByComponent({
                component: 'ItemIcon',
                classPrefix,
            }),
            ItemLabel: getClassNameByComponent({
                component: 'ItemLabel',
                classPrefix,
            }),
            ItemAction: getClassNameByComponent({
                component: 'ItemAction',
                classPrefix,
            }),
            ItemLabelTypography: getClassNameByComponent({
                component: 'ItemLabelTypography',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);
