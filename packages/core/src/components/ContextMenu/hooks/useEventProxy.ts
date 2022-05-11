import { MouseEvent, ReactElement, ReactNode, useCallback } from 'react';

export const useEventProxy = (
    trigger: ReactNode,
    setOpen: (open: boolean) => void,
    open: boolean,
) => {
    const triggerElement = trigger as ReactElement;

    const onClick = triggerElement?.props?.onClick;

    const onClickProxy = useCallback(
        (event: MouseEvent<Element>) => {
            onClick?.(event);

            if (event.isPropagationStopped()) {
                return;
            }

            setOpen(!open);
        },
        [onClick, setOpen, open],
    );

    return {
        onClickProxy,
    };
};
