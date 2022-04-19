import { isValidElement, ReactChild, ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { getWindow } from './globals';

/**
 * @internal
 */
export const stripHTMLTags = (markup: ReactChild): string => {
    const win = getWindow();
    const isReactElement = isValidElement(markup);

    if (!isReactElement) {
        return markup.toString();
    }

    if (!win) {
        return '';
    }

    const staticMarkup = renderToStaticMarkup(markup as ReactElement);
    const div = document.createElement('div');
    div.innerHTML = staticMarkup;
    const textFromMarkup = div.textContent || div.innerText || '';

    return textFromMarkup;
};

/**
 * @internal
 */
export const stripHTMLTagsMemoized = (() => {
    const cachedMap = new WeakMap<ReactElement, string>();

    return (markup: ReactChild): string => {
        if (!isValidElement(markup)) {
            return markup.toString();
        }

        if (cachedMap.has(markup)) {
            return cachedMap.get(markup) || '';
        }

        const textFromMarkup = stripHTMLTags(markup);

        if (textFromMarkup) {
            cachedMap.set(markup, textFromMarkup);
        }

        return textFromMarkup;
    };
})();
