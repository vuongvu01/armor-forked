import styled, { css } from 'styled-components';
import {
    durationNormal,
    paddingProps,
    propsBlocker,
    typography,
} from '@deliveryhero/armor-system';

import { AccordionContentRootPropsType } from './type';

const accordionContentStyle = ({
    isExpanded,
    theme: {
        componentOverrides: { AccordionContent },
    },
}: AccordionContentRootPropsType) => {
    const base = css`
        transition: all ${durationNormal}ms ease;
        ${AccordionContent.Root.base};
    `;

    if (isExpanded) {
        return css`
            height: 100%;
            opacity: 1;
            visibility: inherit;
            ${base}
            ${isExpanded ? AccordionContent.Root.expanded : ''};
        `;
    }

    return base;
};

/** 👉 ROOT ELEMENT */
export const AccordionContentRoot = styled.div.withConfig(propsBlocker)<
    AccordionContentRootPropsType
>`
    height: 0;
    opacity: 0;
    visibility: hidden;

    ${typography('paragraphLarge')};
    ${accordionContentStyle};
    ${paddingProps};
`;
