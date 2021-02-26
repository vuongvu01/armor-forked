import { getWindow } from './getWindow';

export const getBody = () => {
    const win = getWindow();
    if (!win) {
        return null;
    }

    const body = window.document.getElementsByTagName('body')[0];

    return body || null;
};
