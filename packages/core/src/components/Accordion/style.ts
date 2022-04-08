import styled from 'styled-components';
import {
    color,
    propsBlocker,
    token,
    marginProps,
    getComponentOverride,
    focus,
    transition,
    widthProps,
} from '@deliveryhero/armor-system';

import { AccordionRootPropsType } from './type';

export const AccordionRoot = styled.div.withConfig(
    propsBlocker,
)<AccordionRootPropsType>`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;

    color: ${token('body.color')};
    background-color: ${color('neutral.00')};

    ${({ disabled }) => focus({ disabled })}
    ${transition({ all: true })}
    border-bottom-color: ${color('neutral.03')};
    border-top-color: ${color('neutral.03')};
    ${getComponentOverride('Accordion')};
    ${marginProps};
    ${widthProps};
`;
