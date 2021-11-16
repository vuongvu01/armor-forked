import { MouseEvent } from 'react';

/**
 * @internal
 */
export const extractDataAttribute = (
    event: MouseEvent<HTMLElement>,
    name: string,
): string | null => {
    return event.currentTarget.getAttribute(`data-${name}`);
};
