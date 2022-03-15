import { ThemeType } from './type';
import { ScalarType } from '../type';

type SpacingType = (value: ScalarType) => ScalarType;

const spacing = (value: ScalarType = 1, spacingFactor = 1) => {
    if (typeof value === 'string') {
        return value;
    }

    return `${value * spacingFactor}px`;
};

export const makeSpacing = (theme: ThemeType): SpacingType => {
    if (theme.spacing) {
        return theme.spacing;
    }

    const { spacingFactor } = theme;
    return (value: ScalarType) => spacing(value, spacingFactor);
};
