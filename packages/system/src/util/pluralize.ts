/**
 * @internal
 */
export const pluralize = (
    value: number,
    wordSingle: string,
    wordPlural: string,
): string => {
    if (value === 11) {
        return wordPlural;
    }

    const valueAbs = Math.abs(value).toString();
    return valueAbs.charAt(valueAbs.length - 1) === '1'
        ? wordSingle
        : wordPlural;
};
