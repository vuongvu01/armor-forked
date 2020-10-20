import { ThemeDeclarationType } from '../type';
import { ScalarType } from '../../type';
import { spacing } from '../../system/mixins/spacing';

export const makeSpacing = (theme: ThemeDeclarationType) => {
    if (typeof theme.spacing === 'function') {
        return theme.spacing;
    }

    const spacingFactor = theme.spacing;
    return (value: ScalarType) => spacing(value, spacingFactor);
};
