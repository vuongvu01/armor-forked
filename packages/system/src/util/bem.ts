/**
 * @internal
 */
export const makeBEM = (
    block: string,
    element: string,
    modifier?: string,
): string => `${block}-${element}${modifier ? `--${modifier}` : ''}`;

/**
 * @internal
 */
export const appendBEMModifier = (
    blockElement: string,
    modifier: string,
): string => `${blockElement}--${modifier}`;

/**
 * @internal
 */
export const appendBEMModifierOnCondition = (
    blockElement: string,
    modifier: string,
    condition: boolean,
): string => (condition ? `${blockElement}--${modifier}` : '');
