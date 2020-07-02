import { ScalarType } from '../../type';
import { SpanFunctionType } from '../../styling';

export const gutter = (
    x: ScalarType = 0,
    y: ScalarType = 0,
    span?: SpanFunctionType,
) => `
    margin-bottom: -${span ? span(y) : y};
    margin-right: -${span ? span(x) : x};
    
    > * {
        margin-bottom: ${span ? span(y) : y};
        margin-right: ${span ? span(x) : x};
    }
`;
