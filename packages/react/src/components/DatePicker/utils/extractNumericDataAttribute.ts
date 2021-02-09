import { MouseEvent } from 'react';

export const extractNumericDataAttribute = (
    event: MouseEvent<HTMLButtonElement>,
    name: string,
) => {
    const value = parseInt(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event.currentTarget.getAttribute(`data-${name}`)!,
        10,
    );

    if (value === null || value === undefined || Number.isNaN(value)) {
        return null;
    }

    return value;
};
