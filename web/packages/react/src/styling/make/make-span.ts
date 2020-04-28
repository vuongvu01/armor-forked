import { ThemeDeclarationType } from '../type';
import { ScalarType } from '../../type';
import { span } from '../../system/mixins/span';

export const makeSpan = (theme: ThemeDeclarationType) => {
    if (typeof theme.span === 'function') {
        return theme.span;
    }

    const spacingFactor = theme.span;
    return (value: ScalarType) => span(value, spacingFactor);
};
