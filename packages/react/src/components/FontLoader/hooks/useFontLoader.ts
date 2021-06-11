import { useEffect, useMemo } from 'react';
import uniqueId from 'lodash.uniqueid';
import { createElement } from '../utils/createElement';

import { getWindow } from '../../../system/util/globals';

const win = getWindow();

export const useFontLoader = () => {
    const linkElementId = useMemo(() => uniqueId('armor_font_'), []);
    useEffect(() => {
        if (win) {
            const head = win.document.getElementsByTagName('head');
            if (head && head[0]) {
                head[0].appendChild(
                    createElement(
                        win,
                        `<link id="${linkElementId}" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />`,
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
