// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, act } from '@testing-library/react';

import { DateVector } from '../utils/DateVector';

export const makeDateString = (date: Date) => {
    const vect = DateVector.createFromLocalDate(date);

    return [vect.month, vect.day, vect.year].join('-');
};

export const pickADay = (container: HTMLElement, day: number) => {
    const dayNode = container.querySelector(`[data-day="${day}"]`);
    expect(dayNode).toBeInTheDocument();

    act(() => {
        fireEvent.click(dayNode!);
    });
};

export const mashTodayButton = (
    getByText: (selector: string) => HTMLElement,
) => {
    const todayButton = getByText('Today');
    expect(todayButton).toBeInTheDocument();

    act(() => {
        fireEvent.click(todayButton!);
    });
};

export const mashClearAllButton = (
    getByText: (selector: string) => HTMLElement,
) => {
    const clearAllButton = getByText('Clear');
    expect(clearAllButton).toBeInTheDocument();

    act(() => {
        fireEvent.click(clearAllButton!);
    });
};

export const isDayAllowed = (container: HTMLElement, day: number) => {
    const dayNode = container.querySelector(`[data-day="${day}"]`);
    expect(dayNode).toBeInTheDocument();
    const allowed = dayNode!.getAttribute('data-allowed');

    return allowed === '1';
};

export const isDayFree = (container: HTMLElement, day: number) => {
    const dayNode = container.querySelector(`[data-day="${day}"]`);
    expect(dayNode).toBeInTheDocument();
    const free = dayNode!.getAttribute('data-free');

    return free === '1';
};
