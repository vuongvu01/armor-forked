import { GlobalFlags } from '../types/GlobalFlags';

export const getWindow = () => {
    if (typeof window !== 'undefined') {
        return window;
    }

    return null;
};

export const getBody = () => {
    const win = getWindow();
    if (!win) {
        return null;
    }

    const body = window.document.getElementsByTagName('body')[0];

    return body || null;
};

const emptyFlags: GlobalFlags = {};

export const getFlags = (): GlobalFlags => {
    const win = getWindow();
    if (win && 'armorGlobalFlags' in win) {
        // @ts-ignore
        return win.armorGlobalFlags as GlobalFlags;
    }

    return emptyFlags;
};
