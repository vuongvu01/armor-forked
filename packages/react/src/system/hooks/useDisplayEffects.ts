import { useEffect, useState } from 'react';

export const useDisplayEffects = (open: boolean) => {
    const [display, setDisplay] = useState(false);
    const [effectToggle, setEffectToggle] = useState(false);
    useEffect(() => {
        if (!display && open) {
            setDisplay(true);
            setTimeout(() => setEffectToggle(true), 50);
        }

        if (display && !open) {
            setEffectToggle(false);
            setTimeout(() => setDisplay(false), 100);
        }
    }, [open]);

    return {
        display,
        effectToggle, // todo: not an easy-to-understand variable name, rename!
    };
};
