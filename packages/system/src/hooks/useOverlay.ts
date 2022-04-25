import { useCallback, useEffect, useMemo } from 'react';
import uniqueId from 'lodash/uniqueId';
import { OverlayManager, OverlayParametersType } from '../util/OverlayManager';
import { getBody } from '../util';

type ReturnValueType = {
    id: string;
    zIndex: number;
    isTopOverlay: () => boolean;
};

export const useOverlay = (
    open?: boolean,
    parameters: OverlayParametersType = {},
): ReturnValueType => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, open, ...Object.values(parameters)]);

    const isTopOverlay = useCallback(
        () => OverlayManager.isTopOverlay(id),
        [id],
    );

    return {
        id,
        zIndex: OverlayManager.getOverlayZIndex(id),
        isTopOverlay,
    };
};
