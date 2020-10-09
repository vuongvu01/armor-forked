import { ScalarType } from '../../type';
import { SpacingFunctionType } from '../../styling';

export const gutter = (
    x: ScalarType = 0,
    y: ScalarType = 0,
    spacing?: SpacingFunctionType,
) => `
    margin-bottom: -${spacing ? spacing(y) : y};
    margin-right: -${spacing ? spacing(x) : x};
    
    > * {
        margin-bottom: ${spacing ? spacing(y) : y};
        margin-right: ${spacing ? spacing(x) : x};
    }
`;
