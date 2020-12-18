export const getCompatiblePropValue = <P = unknown>(
    newValue: P,
    oldValue: P,
    defaultOldValue?: P,
) => {
    if (oldValue !== undefined) {
        return oldValue;
    }

    if (newValue !== undefined) {
        return newValue;
    }

    return defaultOldValue;
};
