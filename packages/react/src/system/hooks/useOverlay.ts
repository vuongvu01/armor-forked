import { useCallback, useEffect, useMemo } from 'react';
import uniqueId from 'lodash.uniqueid';
import { OverlayManager, OverlayParametersType } from '../util/OverlayManager';
import { getBody } from '../util/getBody';

export const useOverlay = (
    open?: boolean,
    parameters: OverlayParametersType = {},
) => {
    const id = useMemo(() => uniqueId(), []);
    useEffect(() => {
        const body = getBody();

        if (open) {
            OverlayManager.pushOverlay(id, parameters);
            if (body && OverlayManager.hasWindowScrollBlock()) {
                body.style.overflowY = 'hidden';
            }
        }

        return () => {
            OverlayManager.removeOverlay(id);
            if (body && !OverlayManager.hasWindowScrollBlock()) {
                body.style.overflowY = 'visible';
            }
        };
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
