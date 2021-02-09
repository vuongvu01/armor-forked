import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import { DatePickerMonthYearSelectorPropsType } from '../type';
import { ReferenceType } from '../../../../type';
import {
    MONTH_NAMES_SHORT,
    YEAR_SELECTOR_RANGE_DELTA,
    YEAR_SELECTOR_SCROLL_TOP,
} from '../constants';
import { useVerticalScrollBoundariesObserver } from '../../../../system/hooks/useVerticalScrollBoundariesObserver';
import { extractNumericDataAttribute } from '../../utils/extractNumericDataAttribute';

const getInitialYearRange = (year: number) => {
    const yearRange: number[] = [];
    for (let i = year - 5; i <= year + 5; i += 1) {
        yearRange.push(i);
    }

    return yearRange;
};

export const useDatePickerMonthYearSelector = (
    {
        displayedDateVector,
        onDisplayedDateVectorChange,
        toggleMonthYearSelector,
        ...restProps
    }: DatePickerMonthYearSelectorPropsType,
    ref: ReferenceType,
) => {
    const displayedYear = displayedDateVector.year;
    const displayedMonth = displayedDateVector.month;

    const [displayedRange, setDisplayedRange] = useState(
        getInitialYearRange(displayedYear),
    );
    useEffect(() => {
        setDisplayedRange(getInitialYearRange(displayedYear));
    }, [displayedYear]);

    const expandDisplayedRangeTop = useCallback(() => {
        const year = displayedRange[0];
        const previousYear = year - 1;
        const expansionRange: number[] = [];
        for (
            let i = previousYear;
            i >= previousYear - YEAR_SELECTOR_RANGE_DELTA;
            i -= 1
        ) {
            expansionRange.unshift(i);
        }

        setDisplayedRange([...expansionRange, ...displayedRange]);
    }, [setDisplayedRange, displayedRange]);

    const expandDisplayedRangeBottom = useCallback(() => {
        const year = displayedRange[displayedRange.length - 1];
        const nextYear = year + 1;
        const expansionRange: number[] = [];
        for (
            let i = nextYear;
            i <= nextYear + YEAR_SELECTOR_RANGE_DELTA;
            i += 1
        ) {
            expansionRange.push(i);
        }

        setDisplayedRange([...displayedRange, ...expansionRange]);
    }, [setDisplayedRange, displayedRange]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = YEAR_SELECTOR_SCROLL_TOP;
        }
    }, [scrollRef]);

    const boundariesObserverProps = useVerticalScrollBoundariesObserver(
        scrollRef,
        listRef,
        expandDisplayedRangeTop,
        expandDisplayedRangeBottom,
    );

    const onMonthClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const month = extractNumericDataAttribute(event, 'month');
            const year = extractNumericDataAttribute(event, 'year');

            if (month !== null && year !== null) {
                onDisplayedDateVectorChange(
                    displayedDateVector.clone({ year, month, day: 1 }),
                );
            }
            toggleMonthYearSelector();
        },
        [
            displayedDateVector,
            onDisplayedDateVectorChange,
            toggleMonthYearSelector,
        ],
    );

    const [openYear, setOpenYear] = useState(displayedYear);

    const onYearClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const year = parseInt(
                event.currentTarget.getAttribute('data-year')!,
                10,
            );
            if (!Number.isNaN(year)) {
                setOpenYear(year);
            }
        },
        [setOpenYear],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        scrollProps: {
            ...boundariesObserverProps,
            ref: scrollRef,
        },
        listProps: {
            ref: listRef,
        },
        yearTitleProps: {
            onClick: onYearClick,
        },
        monthProps: {
            onClick: onMonthClick,
        },

        months: MONTH_NAMES_SHORT,
        yearRange: displayedRange,
        displayedYear,
        displayedMonth,

        openYear,
    };
};
