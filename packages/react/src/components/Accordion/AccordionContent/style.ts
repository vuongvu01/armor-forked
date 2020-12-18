import styled, { css } from 'styled-components';

import { AccordionContentRootPropsType } from './type';
import { transitionDurationInSec } from '../../../constants';
import { typography } from '../../../system/mixins';

const accordionContentStyle = ({
    isExpanded,
    theme: {
        componentOverrides: { AccordionContent },
    },
}: AccordionContentRootPropsType) => {
    const base = css`
        transition: all ${transitionDurationInSec}s ease;
        ${AccordionContent.Root.base}
    `;

    if (isExpanded) {
        return css`
            height: 100%;
            opacity: 1;
            visibility: inherit;
            ${base}
            ${isExpanded ? AccordionContent.Root.expanded : ''}
        `;
    }

    return base;
};

export const AccordionContentRoot = styled.div<AccordionContentRootPropsType>`
    height: 0;
    opacity: 0;
    visibility: hidden;

    ${typography('paragraphLarge')};

    ${accordionContentStyle}
`;
