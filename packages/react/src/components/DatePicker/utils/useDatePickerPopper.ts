import { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

export const useDatePickerPopper = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement>(null);

    // the ref for the arrow must be a callback ref
    const [arrowRef, setArrowRef] = useState(null);

    const { styles, attributes } = usePopper(
        triggerRef.current,
        dropdownRef.current,
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
                        offset: [0, 5],
                    },
                },
            ],
            placement: 'bottom-start',
        },
    );

    return {
        styles,
        attributes,

        dropdownRef,
        triggerRef,
        setArrowRef,
    };
};
