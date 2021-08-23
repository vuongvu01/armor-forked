import { FC } from 'react';
import { useFontLoader } from './hooks/useFontLoader';

/**
 * @armor-docs-component
 */
export const FontLoader: FC = () => {
    useFontLoader();

    return null;
};
