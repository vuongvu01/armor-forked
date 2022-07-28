import {
    ReactElement,
    ReactNode,
    useCallback,
    RefObject,
    useRef,
    useEffect,
} from 'react';
import { useEventListener, durationNormal } from '@deliveryhero/armor-system';

export const useEventProxy = (
    children: ReactNode,
    setOpen: (hidden: boolean) => void,
    tooltipRef: RefObject<HTMLElement>,
    disableInteractive?: boolean,
) => {
    const leaveTimer = useRef<ReturnType<typeof setTimeout>>();
    const childrenElement = children as ReactElement;
    const onMouseOver = childrenElement?.props?.onMouseOver;
    const onMouseOut = childrenElement?.props?.onMouseOut;

    const onMouseOverProxy = useCallback(
        (event: any) => {
            if (leaveTimer.current) {
                clearTimeout(leaveTimer.current);
            }
            setOpen(true);
            onMouseOver?.(event);
        },
        [onMouseOver, setOpen],
    );

    const onMouseOutProxy = useCallback(
        (event: any) => {
            leaveTimer.current = setTimeout(() => {
                setOpen(false);
                onMouseOut?.(event);
            }, durationNormal);
        },
        [onMouseOut, setOpen],
    );

    useEffect(() => {
        const timerRef = leaveTimer.current;
        return () => {
            if (timerRef) {
                clearTimeout(timerRef);
            }
        };
    }, []);

    useEventListener(
        'mouseover',
        onMouseOverProxy,
        tooltipRef,
        disableInteractive,
    );

    useEventListener(
        'mouseout',
        onMouseOutProxy,
        tooltipRef,
        disableInteractive,
    );

    return {
        onMouseOverProxy,
        onMouseOutProxy,
    };
};
