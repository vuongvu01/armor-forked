import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    reset,
    typography,
    spacing,
    color,
    notLastChild,
    round,
    transition,
    token,
} from '@deliveryhero/armor-system';

import {
    ConditionTagRootPropsType,
    ConditionTagLabelPropsType,
    ConditionTagValuePropsType,
    ConditionTagValueSegmentPropsType,
    ConditionTagValueTailElementPropsType,
    ConditionTagCloseIconContainerPropsType,
} from './type';
import { Link } from '../Link';

/** 👉 ROOT ELEMENT */
export const ConditionTagRoot = styled.div.withConfig(
    propsBlocker,
)<ConditionTagRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    width: fit-content;

    overflow-y: hidden;
    border: 1px solid ${color('neutral.03')};
    display: inline-flex;
    flex-flow: row nowrap;
    position: relative;
    ${round};

    &:hover {
        .ConditionTag-CloseIconContainer {
            opacity: 1;
            transform: translateX(0);
        }
    }

    ${marginProps};
`;

export const ConditionTagLabel = styled.div.withConfig(
    propsBlocker,
)<ConditionTagLabelPropsType>`
    ${typography('labelSmall')};
    color: ${token('body.color')};
    background-color: ${color('neutral.02')};
    padding: ${spacing(1, 2)};
    border-right: 1px solid ${color('neutral.03')};
    display: flex;
    align-items: center;
    user-select: none;
`;

export const ConditionTagValue = styled.div.withConfig(
    propsBlocker,
)<ConditionTagValuePropsType>`
    display: flex;
`;

export const ConditionTagValueSegment = styled.div.withConfig(
    propsBlocker,
)<ConditionTagValueSegmentPropsType>`
    ${typography('paragraphSmall')};
    color: ${token('body.color')};
    background-color: ${color('neutral.00')};
    padding: ${spacing(1, 2)};
    display: flex;
    align-items: center;
    min-width: ${spacing(4)};
    &${notLastChild} {
        border-right: 1px solid ${color('neutral.03')};
    }
    ${({ moreItems }) =>
        moreItems
            ? css`
                  padding-right: ${spacing(6)};
              `
            : ''};
`;

export const ConditionTagValueMoreLink = styled(Link)`
    ${typography('labelSmall')};
    color: ${color(
        'primary.main',
    )}; // todo: just putting the color back, because typography drops it to back :(( remove after the refactoring
`;

export const ConditionTagValueTailElement = styled.div.withConfig(
    propsBlocker,
)<ConditionTagValueTailElementPropsType>``;

export const ConditionTagCloseIconContainer = styled.div.withConfig(
    propsBlocker,
)<ConditionTagCloseIconContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateX(${spacing(6)});
    ${transition({ opacity: true, transform: true })};
    position: absolute;
    top: 2px;
    right: 3px;
`;
