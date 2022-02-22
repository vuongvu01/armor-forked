import styled from 'styled-components';
import { color, widthProps } from '@deliveryhero/armor-system';
import { ComponentElementStylePropsType } from '../type';

export const SpinnerRoot = styled.div<ComponentElementStylePropsType>`
    .spinnerbody path,
    .spinnerhead path {
        stroke: ${color('motion.brand')};
    }
    ${widthProps};
`;
