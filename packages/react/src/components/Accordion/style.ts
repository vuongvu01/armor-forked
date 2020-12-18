import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { makePropList, shouldForwardProp } from '../../utils';
import { AccordionRootPropsType } from './type';
import { AccordionHeaderRootPropsType } from './AccordionHeader/type';
import { transitionDurationInSec } from '../../constants';
import { token } from '../../system/mixins';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['isExpanded']);

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

export const AccordionRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<AccordionRootPropsType>`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;

    color: ${token('body.color')};
    background-color: ${token('body.backgroundColor')};

    ${accordionStyle}
    ${getComponentOverride('Accordion')};
    ${marginAttributes}
`;
