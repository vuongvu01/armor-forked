import { FC } from 'react';
import { useFontLoader } from './hooks/useFontLoader';

/**
 * # FontLoader
 *
 * Loads the design system font.
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { FontLoader } from '@deliveryhero/armor';
 *
 * <FontLoader />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FontLoader: FC = () => {
    useFontLoader();

    return null;
};
