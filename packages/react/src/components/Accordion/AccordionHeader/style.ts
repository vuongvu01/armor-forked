import styled, { css } from 'styled-components';

import { AccordionHeaderRootPropsType } from './type';
import { Typography } from '../../Typography';
import { mouseCursor } from '../../../styling';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { typography } from '../../../system/mixins';
import { getPropsBlocker } from '../../../utils';

const propertyList = {
    isExpanded: true,
    disabled: true,
};

const accordionHeaderStyle = ({
    disabled,
    isExpanded,
    theme: {
        componentOverrides: {
            AccordionHeader: { Root },
        },
    },
}: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css` pointer-events: none; ${Root.base}${Root.disabled}`;
    }

    return isExpanded ? css`${Root.base}${Root.expanded}` : Root.base;
};

const accordionHeaderTypographyStyle = ({
    disabled,
    theme: {
        componentOverrides: {
            AccordionHeader: { Typography: HeaderTypography },
        },
    },
}: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`${HeaderTypography.base}${HeaderTypography.disabled}`;
    }

    return HeaderTypography.base;
};

export const AccordionHeaderRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<AccordionHeaderRootPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    min-height: 56px;
    justify-content: space-between;

    ${typography('labelMedium')};
    ${mouseCursor}
    ${accordionHeaderStyle}
`;

export const AccordionHeaderTypography = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<AccordionHeaderRootPropsType>`
    ${accordionHeaderTypographyStyle}
`;

export const AccordionHeaderBody = styled(Typography).withConfig(
    getPropsBlocker(propertyList, false),
)<AccordionHeaderRootPropsType>`
    align-items: center;
    display: inline-flex;
`;

export const AccordionHeaderExpansionIndicator = styled(
    ExpansionIndicator,
).withConfig(getPropsBlocker({}, false))<AccordionHeaderRootPropsType>`
    .AccordionHeader-ExpansionIndicator.ExpansionIndicator-Content {
        width: 56px;
    }
`;

export const AccordionHeaderIcon = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<AccordionHeaderRootPropsType>`
    ${accordionHeaderTypographyStyle}
`;
