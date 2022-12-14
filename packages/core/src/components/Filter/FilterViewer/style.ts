import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    notLastChild,
    paddingProps,
    color,
    token,
} from '@deliveryhero/armor-system';

import {
    FilterViewerRootPropsType,
    FilterViewerTopBarPropsType,
    FilterViewerTopBarSummaryPropsType,
    FilterViewerActionsPropsType,
    FilterViewConditionsPropsType,
    FilterViewerAddFilterHintPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const FilterViewerRoot = styled.div.withConfig(
    propsBlocker,
)<FilterViewerRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    border-bottom: 1px solid ${color('neutral.03')};
    padding-bottom: ${spacing(6)};

    ${getComponentOverride('FilterViewer')};
    ${marginProps};
    ${paddingProps};
`;

export const FilterViewerTopBar = styled.div.withConfig(
    propsBlocker,
)<FilterViewerTopBarPropsType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${spacing(6)};
`;

export const FilterViewerTopBarSummary = styled.div.withConfig(
    propsBlocker,
)<FilterViewerTopBarSummaryPropsType>``;

export const FilterViewerActions = styled.div.withConfig(
    propsBlocker,
)<FilterViewerActionsPropsType>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > ${notLastChild} {
        margin-right: ${spacing(8)};
    }
    margin-left: ${spacing(5)};
`;

export const FilterViewConditions = styled.div.withConfig(
    propsBlocker,
)<FilterViewConditionsPropsType>`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${spacing(-2)};
    margin-right: ${spacing(-2)};
`;

export const FilterViewerAddFilterHint = styled.div.withConfig(
    propsBlocker,
)<FilterViewerAddFilterHintPropsType>`
    color: ${color('neutral.07')};
`;
