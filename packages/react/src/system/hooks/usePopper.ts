import { RefObject, useMemo, useState } from 'react';
import { usePopper as useReactPopper } from 'react-popper';
import { Placement } from '@popperjs/core';

type OffsetType = [number, number];

export type PopperPropsType = {
    align?: Placement;
    offset?: [number, number];
    allowedAutoPlacements?: Placement[];
    arrowPadding?: number;
};

const DEFAULT_OFFSET: OffsetType = [0, 10];

/**
 * Use this hook to add support of popper behaviour to a component.
 */
export const usePopper = (
    panelRef: RefObject<HTMLElement | undefined>,
    triggerRef: RefObject<HTMLElement | undefined>,
    props?: PopperPropsType,
) => {
    // the ref for the arrow must be a callback ref
    const [arrowRef, setArrowRef] = useState(null);

    const {
        offset = DEFAULT_OFFSET,
        allowedAutoPlacements,
        arrowPadding = 0,
        align = 'bottom',
    } = props || {};

    const options = useMemo(() => {
        const result: Record<string, any> = {
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                        padding: arrowPadding,
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
        };

        if (allowedAutoPlacements) {
            result.modifiers.push({
                name: 'flip',
                options: {
                    allowedAutoPlacements,
                },
            });
        }

        return result;
    }, [offset, allowedAutoPlacements, arrowRef, align]);

    const { styles, attributes } = useReactPopper(
        triggerRef.current,
        panelRef.current,
        options,
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
