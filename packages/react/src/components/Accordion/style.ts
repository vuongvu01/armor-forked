import styled, { css } from 'styled-components';

import { AccordionRootPropsType } from './type';
import { AccordionHeaderRootPropsType } from './AccordionHeader/type';
import { transitionDurationInSec } from '../../constants';
import { color, propsBlocker, token, marginAttributes } from '../../system';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const accordionStyle = ({
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionHeaderRootPropsType) => {
    return css`
        transition: all ${transitionDurationInSec}s ease;
        ${Accordion.Accordion.base}
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

    ${accordionStyle}
    ${getComponentOverride('Accordion')};
    ${marginAttributes}
`;
