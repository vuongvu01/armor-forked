import { useEffect, useMemo } from 'react';
import { getWindow, generateId } from '@deliveryhero/armor-system';

import { createElement } from '../utils/createElement';

const win = getWindow();

export const useFontLoader = () => {
    const linkElementId = useMemo(
        () => generateId(undefined, 'armor_font_'),
        [],
    );
    useEffect(() => {
        if (win) {
            const head = win.document.getElementsByTagName('head');
            if (head && head[0]) {
                head[0].appendChild(
                    createElement(
                        win,
                        `<link id="${linkElementId}" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet" />`,
                    ),
                );
            }
        }

        return () => {
            if (win) {
                const element = win.document.getElementById(linkElementId);
                if (element && element.parentElement) {
                    element.parentElement.removeChild(element);
                }
            }
        };
    }, [linkElementId]);
};
