// todo: come up with something more clever than this
import { useEffect, useState } from 'react';

export const useDisplay = (open?: boolean) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [effectToggle, setEffectToggle] = useState<boolean>(false);
    useEffect(() => {
        if (!display && open) {
            setDisplay(true);
            setTimeout(() => setEffectToggle(true), 50);
        }

        if (display && !open) {
            setEffectToggle(false);
            setTimeout(() => setDisplay(false), 100);
        }
    }, [!!open]);

    return [display, effectToggle];
};
