import { MouseEvent } from 'react';

export const extractDataAttribute = (
    event: MouseEvent<HTMLElement>,
    name: string,
) => {
    return event.currentTarget.getAttribute(`data-${name}`);
};
