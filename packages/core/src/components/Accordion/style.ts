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
    spacing,
} from '@deliveryhero/armor-system';

import { AccordionRootPropsType } from './type';

export const AccordionRoot = styled.div.withConfig(
    propsBlocker,
)<AccordionRootPropsType>`
    border-top: 1px solid ${color('neutral.03')};
    display: flex;
    flex-direction: column;
    margin-top: ${spacing(-0.25)};

    color: ${token('body.color')};
    background-color: ${color('neutral.00')};

    &:first-child {
        border-width: 0;
    }

    ${focus}
    ${transition({ all: true })}
    ${getComponentOverride('Accordion')};
    ${marginProps};
    ${widthProps};
`;
