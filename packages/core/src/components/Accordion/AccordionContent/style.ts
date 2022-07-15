import styled, { css } from 'styled-components';
import {
    paddingProps,
    propsBlocker,
    typography,
    spacing,
    transition,
    pixelToRemToken,
    token,
} from '@deliveryhero/armor-system';

import { AccordionContentRootPropsType } from './type';

const getRootStyle = ({ isExpanded }: AccordionContentRootPropsType) => {
    const result = css`
        ${transition({ all: true })};
        line-height: 0;
        padding-right: ${spacing(6)};
        padding-left: ${spacing(6)};
    `;

    if (isExpanded) {
        return css`
            ${result};
            max-height: max-content;
            opacity: 1;
            line-height: ${pixelToRemToken('typography.body.lineHeight')};
            padding: ${spacing(6)};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const AccordionContentRoot = styled.div.withConfig(
    propsBlocker,
)<AccordionContentRootPropsType>`
    max-height: 0;
    opacity: 0;
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    overflow: hidden;
    ${getRootStyle};
    ${paddingProps};
`;
