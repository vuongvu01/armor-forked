import { SpanFunctionOrConstType, SpanFunctionType } from '../type';
import { ScalarType } from '../../type';

export const makeSpan = (span?: SpanFunctionOrConstType): SpanFunctionType => {
    if (typeof span !== 'undefined') {
        if (typeof span === 'function') {
            return span;
        }

        const spacingFactor = span;
        return (value: ScalarType = 1) => {
            if (typeof value === 'string') {
                return value;
            }

            return `${value * spacingFactor}px`;
        };
    }

    return (value: ScalarType = 1) => {
        if (typeof value === 'string') {
            return value;
        }
        return `${value}px`;
    };
};
