import { ScalarType } from 'src/type';
import { SpanFunctionType } from 'src/styling';

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
