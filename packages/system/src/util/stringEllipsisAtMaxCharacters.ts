const defaultLabelMaxLength = 16;
const ellipsis = '…';

export const stringEllipsisAtMaxCharacters = (
    stringToTruncate: string,
    maxLength: number = defaultLabelMaxLength,
): string =>
    stringToTruncate.length > maxLength
        ? `${stringToTruncate.substr(0, maxLength - 1)} ${ellipsis}`
        : stringToTruncate;
