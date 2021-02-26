import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerTopBarClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            MonthYearSelectorToggle: makeBEM(
                classPrefix,
                'MonthYearSelectorToggle',
            ),
            MonthYearSelectorToggleArrow: makeBEM(
                classPrefix,
                'MonthYearSelectorToggleArrow',
            ),
            MonthNavigation: makeBEM(classPrefix, 'MonthNavigation'),
            MonthNavigationButtonBackward: makeBEM(
                classPrefix,
                'MonthNavigationButtonBackward',
            ),
            MonthNavigationButtonForward: makeBEM(
                classPrefix,
                'MonthNavigationButtonForward',
            ),
            MonthNavigationButtonArrow: makeBEM(
                classPrefix,
                'MonthNavigationButtonArrow',
            ),
        };
    }, [classPrefix, className]);
