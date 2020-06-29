import { ScalarType } from 'src/type';
import { span } from 'src/system/mixins/span';
import { ThemeDeclarationType } from '../type';

const makeSpan = (theme: ThemeDeclarationType) => {
    if (typeof theme.span === 'function') {
        return theme.span;
    }

    const spacingFactor = theme.span;
    return (value: ScalarType) => span(value, spacingFactor);
};

export default makeSpan;
