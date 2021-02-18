import { useCallback, useEffect, useMemo } from 'react';
import uniqueId from 'lodash.uniqueid';
import { OverlayManager, OverlayParametersType } from '../util/OverlayManager';

export const useOverlay = (
    open?: boolean,
    parameters: OverlayParametersType = {},
) => {
    const id = useMemo(() => uniqueId(), []);
    useEffect(() => {
        if (open) {
            OverlayManager.pushOverlay(id, parameters);
        }

        return () => OverlayManager.removeOverlay(id);
    }, [id, open, ...Object.values(parameters)]);

    const isTopOverlay = useCallback(() => OverlayManager.isTopOverlay(id), [
        id,
    ]);

    return {
        id,
        zIndex: OverlayManager.getOverlayZIndex(id),
        isTopOverlay,
    };
};
