import { ThemeDeclarationType } from '../type';
import { ScalarType } from '../../type';

const spacing = (value: ScalarType = 1, spacingFactor = 1) => {
    if (typeof value === 'string') {
        return value;
    }

    return `${value * spacingFactor}px`;
};

export const makeSpacing = (theme: ThemeDeclarationType) => {
    if (typeof theme.spacing === 'function') {
        return theme.spacing;
    }

    const spacingFactor = theme.spacing;
    return (value: ScalarType) => spacing(value, spacingFactor);
};
