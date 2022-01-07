import { MouseEventHandler, useState } from 'react';

export const useIsHovered = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onMouseEnter: MouseEventHandler<HTMLElement> = () => {
        setIsHovered(true);
    };

    const onMouseLeave: MouseEventHandler<HTMLElement> = () =>
        setIsHovered(false);

    return { isHovered, onMouseEnter, onMouseLeave };
};
