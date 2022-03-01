import { ThemeInputType } from './type';
import { ScalarType } from '../type';

type ResultType = (value: ScalarType) => ScalarType;

const spacing = (value: ScalarType = 1, spacingFactor = 1) => {
    if (typeof value === 'string') {
        return value;
    }

    return `${value * spacingFactor}px`;
};

export const makeSpacing = (theme: ThemeInputType): ResultType => {
    // todo: remove this
    if (typeof theme.spacing === 'function') {
        return theme.spacing;
    }

    const spacingFactor = theme.spacing;
    return (value: ScalarType) => spacing(value, spacingFactor);
};
