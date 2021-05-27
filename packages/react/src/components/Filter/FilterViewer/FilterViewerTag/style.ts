import styled, { css } from 'styled-components';
import {
    FilterViewerTagRootPropsType,
    FilterViewerTagLabelPropsType,
    FilterViewerTagValuePropsType,
    FilterViewerTagValueSegmentPropsType,
    FilterViewerTagValueTailElementPropsType,
    FilterViewerTagCloseIconContainerPropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    notLastChild,
    round,
    transition,
} from '../../../../system';
import { Link } from '../../../Link';

/** 👉 ROOT ELEMENT */
export const FilterViewerTagRoot = styled.div.withConfig(propsBlocker)<
    FilterViewerTagRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    width: fit-content;

    overflow-y: hidden;
    border: 1px solid ${color('neutral.03')};
    display: inline-flex;
    flex-flow: row nowrap;
    position: relative;
    ${round};

    &:hover {
        .FilterViewerTag-CloseIconContainer {
            opacity: 1;
            transform: translateX(0);
        }
    }

    ${getComponentOverride('FilterViewerTag')};
    ${marginAttributes};
`;

export const FilterViewerTagLabel = styled.div.withConfig(propsBlocker)<
    FilterViewerTagLabelPropsType
>`
    ${typography('labelSmall')};
    background-color: ${color('neutral.02')};
    padding: ${spacing(1)} ${spacing(2)};
    border-right: 1px solid ${color('neutral.03')};
    display: flex;
    align-items: center;
    user-select: none;
`;

export const FilterViewerTagValue = styled.div.withConfig(propsBlocker)<
    FilterViewerTagValuePropsType
>`
    display: flex;
`;

export const FilterViewerTagValueSegment = styled.div.withConfig(propsBlocker)<
    FilterViewerTagValueSegmentPropsType
>`
    ${typography('paragraphSmall')};
    background-color: ${color('neutral.00')};
    padding: ${spacing(1)} ${spacing(2)};
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

export const FilterViewerTagValueMoreLink = styled(Link)`
    ${typography('labelSmall')};
    color: ${color(
        'primary.main',
    )}; // todo: just putting the color back, because typography drops it to back :(( remove after the refactoring
`;

export const FilterViewerTagValueTailElement = styled.div.withConfig(
    propsBlocker,
)<FilterViewerTagValueTailElementPropsType>``;

export const FilterViewerTagCloseIconContainer = styled.div.withConfig(
    propsBlocker,
)<FilterViewerTagCloseIconContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateX(${spacing(6)});
    ${transition({ opacity: true, transform: true, 'background-color': true })};
    outline: none;
    background-color: ${color('primary.lightest')};
    color: ${color('error.light')};
    //align-self: center;
    position: absolute;
    top: 2px;
    right: 3px;
    cursor: pointer;

    &:hover {
        background-color: ${color('neutral.02')};
    }
    ${round};
`;
