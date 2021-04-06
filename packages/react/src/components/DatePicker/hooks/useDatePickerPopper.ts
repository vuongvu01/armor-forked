import { useRef } from 'react';
import { usePopper } from '../../../system/hooks/usePopper';

export const useDatePickerPopper = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement>();

    const { panelProps, arrowProps } = usePopper(dropdownRef, triggerRef, {
        align: 'bottom-start',
        offset: [0, 5],
    });

    return {
        dropdownProps: {
            ref: dropdownRef,
            ...panelProps,
        },
        arrowProps,
        dropdownRef,
        triggerRef,
    };
};
