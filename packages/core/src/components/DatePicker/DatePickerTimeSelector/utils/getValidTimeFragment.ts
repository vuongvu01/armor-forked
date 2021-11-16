export const getValidTimeFragment = (value: string, maxValue: number) => {
    let valueInt = parseInt(value, 10);
    if (!Number.isNaN(valueInt)) {
        if (valueInt > maxValue) {
            valueInt = maxValue;
        } else if (valueInt < 0) {
            valueInt = 0;
        }
        return valueInt;
    }

    return null;
};
