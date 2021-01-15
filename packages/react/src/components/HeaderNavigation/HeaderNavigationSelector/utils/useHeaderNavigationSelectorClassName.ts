import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    return `${baseClassNames}`.trim();
};

const useHeaderNavigationSelectorClassName = (
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
            Wrapper: getClassNameByComponent({
                component: 'Wrapper',
                classPrefix,
            }),
            SelectedOptions: getClassNameByComponent({
                component: 'SelectedOptions',
                classPrefix,
            }),
            SelectedOptionsContainer: getClassNameByComponent({
                component: 'SelectedOptionsContainer',
                classPrefix,
            }),
            SelectedOptionsValues: getClassNameByComponent({
                component: 'SelectedOptionsValues',
                classPrefix,
            }),
            SelectedOptionsExpansionIndicatorContainer: getClassNameByComponent(
                {
                    component: 'SelectedOptionsExpansionIndicatorContainer',
                    classPrefix,
                },
            ),
            SelectedOptionsExpansionIndicator: getClassNameByComponent({
                component: 'SelectedOptionsExpansionIndicator',
                classPrefix,
            }),
            OptionListContainer: getClassNameByComponent({
                component: 'OptionListContainer',
                classPrefix,
            }),
            OptionListWrapper: getClassNameByComponent({
                component: 'OptionListWrapper',
                classPrefix,
            }),
            OptionList: getClassNameByComponent({
                component: 'OptionList',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationSelectorClassName;
