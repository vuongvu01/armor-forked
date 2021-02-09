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
            MonthNavigation: makeBEM(classPrefix, 'MonthNavigation'),
            MonthNavigationButtonBackward: makeBEM(
                classPrefix,
                'MonthNavigationButtonBackward',
            ),
            MonthNavigationButtonForward: makeBEM(
                classPrefix,
                'MonthNavigationButtonForward',
            ),
            ArrowRightIcon: makeBEM(classPrefix, 'ArrowRightIcon'),
        };
    }, [classPrefix, className]);
