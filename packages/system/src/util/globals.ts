import { GlobalFlagsType } from '../types';

/**
 * @internal
 */
export const getWindow = (): (Window & typeof globalThis) | null => {
    if (typeof window !== 'undefined') {
        return window;
    }

    return null;
};

/**
 * @internal
 */
export const getBody = (): HTMLBodyElement | null => {
    const win = getWindow();
    if (!win) {
        return null;
    }

    const body = window.document.getElementsByTagName('body')[0];

    return body || null;
};

const emptyFlags: GlobalFlagsType = {};

/**
 * @internal
 */
export const getFlags = (): GlobalFlagsType => {
    const win = getWindow();
    if (win && 'armorGlobalFlags' in win) {
        return win.armorGlobalFlags;
    }

    return emptyFlags;
};
