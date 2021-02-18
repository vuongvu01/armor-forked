import {
    MouseEventHandler,
    MouseEvent,
    ReactElement,
    ReactNode,
    useCallback,
} from 'react';

export const useEventProxy = (
    trigger: ReactNode,
    setOpen: (open: boolean) => void,
    open: boolean,
) => {
    const triggerElement = trigger as ReactElement;

    let onClick: MouseEventHandler | null = null;
    if (
        triggerElement &&
        triggerElement.props &&
        triggerElement.props.onClick
    ) {
        onClick = triggerElement.props.onClick;
    }
    const onClickProxy = useCallback(
        (event: MouseEvent<Element>) => {
            if (onClick) {
                onClick(event);
            }

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
