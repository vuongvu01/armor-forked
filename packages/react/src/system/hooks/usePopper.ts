import { useState } from 'react';
import { usePopper as useReactPopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { MutableReferenceType } from '../../type';

/**
 * Use this hook to add support of popper behaviour to a component.
 * @param panelRef
 * @param triggerRef
 * @param align
 */
export const usePopper = (
    panelRef: MutableReferenceType,
    triggerRef: MutableReferenceType,
    align: Placement = 'bottom',
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
                        offset: [0, 10],
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
            ref: setArrowRef as any,
            style: styles.arrow,
        },
    };
};
