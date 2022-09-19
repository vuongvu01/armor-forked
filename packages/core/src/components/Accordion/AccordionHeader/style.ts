import styled, { css } from 'styled-components';
import {
    color,
    typography,
    propsBlocker,
    spacing,
    mouseCursor,
    token,
    transition,
    borderRadius,
} from '@deliveryhero/armor-system';

import { AccordionHeaderRootPropsType } from './type';
import { ExpansionIndicator } from '../../ExpansionIndicator';

const getRootStyle = ({ disabled }: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
            background-color: ${color('neutral.03')};
        `;
    }

    return '';
};

const getHeaderElementsStyle = ({ disabled }: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`
            color: ${color('neutral.07')};
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const AccordionHeaderRoot = styled.div.withConfig(
    propsBlocker,
)<AccordionHeaderRootPropsType>`
    ${typography('labelLarge')};
    color: ${token('body.color')};
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    min-height: ${spacing(14)};
    padding: ${spacing(4, 6)};

    &:hover {
        background-color: ${color('primary.lightest')};
    }

    &:focus-visible {
        border-radius: ${borderRadius('sharp')};
    }

    ${transition({ 'background-color': true })}
    ${mouseCursor};
    ${getRootStyle};
`;

export const AccordionHeaderBody = styled.div<AccordionHeaderRootPropsType>`
    align-items: center;
    display: inline-flex;
    width: 100%;
`;

export const AccordionHeaderTitle = styled.div<AccordionHeaderRootPropsType>`
    color: ${color('neutral.11')};
    padding-right: ${spacing(3)};
    ${getHeaderElementsStyle};
`;

const accordionExpansionIndicatorStyle = ({
    disabled,
}: AccordionHeaderRootPropsType) => {
    return disabled
        ? css`
              .ExpansionIndicator-Icon {
                  color: ${color('neutral.07')};
              }
          `
        : {};
};

export const AccordionHeaderExpansionIndicator = styled(
    ExpansionIndicator,
)<AccordionHeaderRootPropsType>`
    .AccordionHeader-ExpansionIndicator.ExpansionIndicator-Content {
        width: ${spacing(14)};
    }

    ${accordionExpansionIndicatorStyle};
`;

export const AccordionHeaderIcon = styled.div.withConfig(
    propsBlocker,
)<AccordionHeaderRootPropsType>`
    color: ${color('neutral.11')};
    ${getHeaderElementsStyle};
`;
