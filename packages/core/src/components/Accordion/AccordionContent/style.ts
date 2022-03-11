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
            height: 100%;
            opacity: 1;
            visibility: inherit;
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
    height: 0;
    opacity: 0;
    visibility: hidden;
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    ${getRootStyle};
    ${paddingProps};
`;
