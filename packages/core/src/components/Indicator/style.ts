import styled from 'styled-components';
import {
    color,
    spacing,
    marginProps,
    propsBlocker,
    typography,
    round,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { IndicatorRootPropsType } from './type';

export const IndicatorRoot = styled.div.withConfig(
    propsBlocker,
)<IndicatorRootPropsType>`
    ${typography('labelSmall')};
    color: ${color('neutral.00')};
    background-color: ${color('error.main')};
    width: ${spacing(4)};
    height: ${spacing(4)};
    box-sizing: border-box;
    position: relative;
    ${round};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    &:before {
        content: '!';
    }
    ${getComponentOverride('Indicator')};
    ${marginProps};
`;
