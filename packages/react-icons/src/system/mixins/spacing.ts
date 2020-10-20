import { ScalarType } from '../../type';

export const spacing = (value: ScalarType = 1, spacingFactor = 1) => {
    if (typeof value === 'string') {
        return value;
    }

    return `${value * spacingFactor}px`;
};
