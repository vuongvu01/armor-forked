import { useCallback, MouseEvent } from 'react';

import { HeaderNavigationTitlePropsType } from '../type';

export const useHeaderNavigationTitle = ({
    onLinkClick,
    name,
    ...restProps
}: HeaderNavigationTitlePropsType) => {
    const handleLinkClick = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (event: MouseEvent<HTMLElement>) => {
            if (onLinkClick && name) {
                onLinkClick(name);
            }
        },
        [onLinkClick, name],
    );

    return {
        onClick: handleLinkClick,
        restRootProps: restProps,
    };
};
