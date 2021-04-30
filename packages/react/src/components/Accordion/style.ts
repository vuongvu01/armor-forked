import styled, { css } from 'styled-components';

import { AccordionRootPropsType } from './type';
import { transitionDurationInSec } from '../../constants';
import {
    color,
    propsBlocker,
    token,
    marginAttributes,
    getComponentOverride,
} from '../../system';

const accordionStyle = ({
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionRootPropsType) => {
    return css`
        transition: all ${transitionDurationInSec}s ease;
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
    ${marginAttributes};
`;
