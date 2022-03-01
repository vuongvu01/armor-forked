import { MouseEventHandler, ReactElement, ReactNode, useCallback } from 'react';

export const useEventProxy = (
    children: ReactNode,
    setOpen: (hidden: boolean) => void,
) => {
    const childrenElement = children as ReactElement;

    let onMouseOver: MouseEventHandler | null = null;
    if (
        childrenElement &&
        childrenElement.props &&
        childrenElement.props.onMouseOver
    ) {
        onMouseOver = childrenElement.props.onMouseOver;
    }
    const onMouseOverProxy = useCallback(
        (event) => {
            setOpen(true);
            if (onMouseOver) {
                onMouseOver(event);
            }
        },
        [onMouseOver, setOpen],
    );

    let onMouseOut: MouseEventHandler | null = null;
    if (
        childrenElement &&
        childrenElement.props &&
        childrenElement.props.onMouseOut
    ) {
        onMouseOut = childrenElement.props.onMouseOut;
    }
    const onMouseOutProxy = useCallback(
        (event) => {
            setOpen(false);
            if (onMouseOut) {
                onMouseOut(event);
            }
        },
        [onMouseOut, setOpen],
    );

    return {
        onMouseOverProxy,
        onMouseOutProxy,
    };
};
