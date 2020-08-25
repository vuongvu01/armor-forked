import styled, { css } from 'styled-components';

import { AccordionHeaderRootPropsType } from './type';
import { Typography } from '../../Typography';
import { mouseCursor } from '../../../styling';

const accordionHeaderStyle = ({
    disabled,
    isExpanded,
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css` pointer-events: none; ${Accordion.AccordionHeader.base}${Accordion.AccordionHeader.disabled}`;
    }

    return isExpanded
        ? css`${Accordion.AccordionHeader.base}${Accordion.AccordionHeader.expanded}`
        : Accordion.AccordionHeader.base;
};

const accordionHeaderTypographyStyle = ({
    disabled,
    theme: {
        componentOverrides: { Accordion },
    },
}: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`${Accordion.AccordionHeaderTypography.base}${Accordion.AccordionHeaderTypography.disabled}`;
    }

    return Accordion.AccordionHeaderTypography.base;
};

export const AccordionHeaderRoot = styled.div<AccordionHeaderRootPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    min-height: 56px;
    justify-content: space-between;

    ${mouseCursor}
    ${accordionHeaderStyle}
`;

export const AccordionHeaderTypography = styled(Typography)<
    AccordionHeaderRootPropsType
>`
    ${accordionHeaderTypographyStyle}
`;

export const AccordionHeaderIcon = styled.div<AccordionHeaderRootPropsType>`
    ${accordionHeaderTypographyStyle}
`;
