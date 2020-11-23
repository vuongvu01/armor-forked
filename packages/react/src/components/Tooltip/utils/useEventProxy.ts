import { MouseEventHandler, ReactElement, ReactNode, useCallback } from 'react';

export const useEventProxy = (
    children: ReactNode,
    setHidden: (hidden: boolean) => void,
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
        event => {
            setHidden(false);
            if (onMouseOver) {
                onMouseOver(event);
            }
        },
        [onMouseOver, setHidden],
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
        event => {
            setHidden(true);
            if (onMouseOut) {
                onMouseOut(event);
            }
        },
        [onMouseOut, setHidden],
    );

    return {
        onMouseOverProxy,
        onMouseOutProxy,
    };
};
