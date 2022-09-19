import { css } from 'styled-components';
import { colorGrey80 } from '@deliveryhero/armor-system';

export const getConditionTagOverride = () => css`
    .ConditionTag-ValueSegment {
        background-color: ${colorGrey80};
    }
`;
