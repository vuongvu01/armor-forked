import { useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

import { durationNormal } from '../tokens';
import { getWindow, noop } from '../util';

const isClient = getWindow();

function getSize() {
    return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
    };
}

/**
 *
 * @param debounceDuration
 * @return {{width: number, height: number}}
 */
export function useWindowSize({ debounceDuration = durationNormal } = {}): {
    width?: number;
    height?: number;
} {
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return noop;
        }

        function handleResize() {
            debounce(debounceDuration, setWindowSize)(getSize());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [debounceDuration]);

    return windowSize;
}
