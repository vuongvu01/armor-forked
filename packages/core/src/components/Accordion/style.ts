import styled, { css } from 'styled-components';
import {
    color,
    propsBlocker,
    token,
    marginProps,
    getComponentOverride,
    durationNormal,
} from '@deliveryhero/armor-system';

import { AccordionRootPropsType } from './type';

const accordionStyle = ({
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionRootPropsType) => {
    return css`
        transition: all ${durationNormal}ms ease;
        ${Accordion.Accordion.base};
    `;
};

export const AccordionRoot = styled.div.withConfig(propsBlocker)<
    AccordionRootPropsType
>`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;

    color: ${token('body.color')};
    background-color: ${color('neutral.00')};

    ${accordionStyle};
    ${getComponentOverride('Accordion')};
    ${marginProps};
`;
