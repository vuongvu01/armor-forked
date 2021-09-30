import styled, { css } from 'styled-components';

import { AccordionHeaderRootPropsType } from './type';
import { Typography } from '../../Typography';
import { mouseCursor } from '../../../styling';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { color, typography, propsBlocker, spacing } from '../../../system';

const getRootStyle = ({ disabled }: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
            background: ${color('neutral.03')};

            &:hover {
                background: ${color('neutral.03')};
            }
        `;
    }

    return '';
};

const getHeaderElementsStyle = ({ disabled }: AccordionHeaderRootPropsType) => {
    if (disabled) {
        return css`
            color: ${color('neutral.05')};
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const AccordionHeaderRoot = styled.div.withConfig(propsBlocker)<
    AccordionHeaderRootPropsType
>`
    ${typography('labelMedium')};
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    min-height: 56px;
    justify-content: space-between;

    padding: ${spacing(4)} ${spacing(6)};
    &:hover {
        background: ${color('primary.lightest')};
    }
    &:focus {
        outline-color: ${color('primary.dark')};
    }

    ${mouseCursor};
    ${getRootStyle};
`;

export const AccordionHeaderBody = styled.div<AccordionHeaderRootPropsType>`
    align-items: center;
    display: inline-flex;
`;

export const AccordionHeaderTitle = styled.div<AccordionHeaderRootPropsType>`
    ${typography('labelLarge')};
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
                  color: ${color('neutral.05')};
              }
          `
        : {};
};

export const AccordionHeaderExpansionIndicator = styled(ExpansionIndicator)<
    AccordionHeaderRootPropsType
>`
    .AccordionHeader-ExpansionIndicator.ExpansionIndicator-Content {
        width: 56px;
    }

    ${accordionExpansionIndicatorStyle};
`;

export const AccordionHeaderIcon = styled.div.withConfig(propsBlocker)<
    AccordionHeaderRootPropsType
>`
    color: ${color('neutral.11')};
    padding-right: ${spacing(3)};
    ${getHeaderElementsStyle};
`;
