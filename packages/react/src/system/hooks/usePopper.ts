import { RefObject, useState } from 'react';
import { usePopper as useReactPopper } from 'react-popper';
import { Placement } from '@popperjs/core';

/**
 * Use this hook to add support of popper behaviour to a component.
 */
export const usePopper = (
    panelRef: RefObject<HTMLElement | undefined>,
    triggerRef: RefObject<HTMLElement | undefined>,
    align: Placement = 'bottom',
    offset: [number, number] = [0, 10],
) => {
    // the ref for the arrow must be a callback ref
    const [arrowRef, setArrowRef] = useState(null);

    const { styles, attributes } = useReactPopper(
        triggerRef.current,
        panelRef.current,
        {
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset,
                    },
                },
            ],
            placement: align,
        },
    );

    return {
        panelProps: {
            style: styles.popper,
            ...attributes.popper,
        },
        arrowProps: {
            ref: setArrowRef as any, // todo: tighten
            style: styles.arrow,
        },
    };
};
