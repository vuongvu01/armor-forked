import styled, { css } from 'styled-components';

import { AccordionContentRootPropsType } from './type';
import { transitionDurationInSec } from '../../../constants';

const accordionContentStyle = ({
    isExpanded,
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionContentRootPropsType) => {
    const base = css`
        transition: all ${transitionDurationInSec}s ease;
        ${Accordion.AccordionContent.base}
    `;

    if (isExpanded) {
        return css`
            height: 100%;
            opacity: 1;
            visibility: inherit;
            ${base}
            ${isExpanded ? Accordion.AccordionContent.expanded : ''}
        `;
    }

    return base;
};

export const AccordionContentRoot = styled.div<AccordionContentRootPropsType>`
    height: 0;
    opacity: 0;
    visibility: hidden;

    ${accordionContentStyle}
`;
