import { useState, useEffect } from 'react';
import { getWindow, zIndexToast, generateId } from '@deliveryhero/armor-system';

export const useToastPortal = (zIndex?: number) => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${generateId()}`);

    useEffect(() => {
        const win = getWindow();
        if (!win) {
            return;
        }

        const div = document.createElement('div');
        div.setAttribute('id', portalId);
        div.setAttribute('data-testid', portalId);
        div.setAttribute(
            'style',
            `position: fixed; z-index: ${zIndex || zIndexToast}`,
        );
        document.getElementsByTagName('body')[0].prepend(div);

        setLoaded(true);

        // eslint-disable-next-line consistent-return
        return () => {
            document.getElementsByTagName('body')[0].removeChild(div);
        };
    }, [portalId, zIndex]);

    return { loaded, portalId };
};
