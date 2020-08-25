import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { AccordionRootPropsType } from './type';
import { AccordionHeaderRootPropsType } from './AccordionHeader/type';
import { transitionDurationInSec } from '../../constants';

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
    shouldForwardProp: property => shouldForwardProp(property),
})<AccordionRootPropsType>`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    display: flex;
    flex-direction: column;
    margin-top: -1px;

    ${accordionStyle}
    ${marginAttributes}
`;
