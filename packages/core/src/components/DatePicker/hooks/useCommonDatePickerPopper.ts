import { useRef } from 'react';
import { usePopper } from '@deliveryhero/armor-system';

export const useCommonDatePickerPopper = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLInputElement>(null);

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
