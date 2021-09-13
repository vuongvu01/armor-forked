import { useEffect, useState } from 'react';

export const useDisplayEffects = (open: boolean) => {
    const [display, setDisplay] = useState(false);
    const [effectToggle, setEffectToggle] = useState(false);

    useEffect(() => {
        let isCurrentEffect = true;

        if (!display && open) {
            setDisplay(true);
            setTimeout(() => isCurrentEffect && setEffectToggle(true), 50);
        }

        if (display && !open) {
            setEffectToggle(false);
            setTimeout(() => isCurrentEffect && setDisplay(false), 100);
        }

        return () => {
            isCurrentEffect = false;
        };
    }, [open]);

    return {
        display,
        effectToggle, // todo: not an easy-to-understand variable name, rename!
    };
};
