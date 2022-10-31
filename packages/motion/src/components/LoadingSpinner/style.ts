import styled from 'styled-components';
import { color, widthProps } from '@deliveryhero/armor-system';
import { LoadingSpinnerPropsType } from './type';

export const SpinnerRoot = styled.div<LoadingSpinnerPropsType>`
    .SpinnerHead {
        opacity: 1; // to reset default opacity from json file
        path {
            stroke: ${(p) => color(p.primaryColor || 'motion.brand')};
        }
    }

    .SpinnerBody {
        opacity: 1; // to reset default opacity from json file
        path {
            stroke: ${(p) => color(p.secondaryColor || 'motion.neutral')};
        }
    }

    ${widthProps};
`;
