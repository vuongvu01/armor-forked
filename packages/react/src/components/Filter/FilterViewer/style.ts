import styled from 'styled-components';
import {
    FilterViewerRootPropsType,
    FilterViewerTopBarPropsType,
    FilterViewerActionsPropsType,
    FilterViewConditionsPropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    notLastChild,
    paddingAttributes,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const FilterViewerRoot = styled.div.withConfig(propsBlocker)<
    FilterViewerRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

    ${getComponentOverride('FilterViewer')};
    ${marginAttributes};
    ${paddingAttributes};
`;

export const FilterViewerTopBar = styled.div.withConfig(propsBlocker)<
    FilterViewerTopBarPropsType
>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${spacing(6)};
`;

export const FilterViewerActions = styled.div.withConfig(propsBlocker)<
    FilterViewerActionsPropsType
>`
    display: flex;
    justify-content: flex-end;
    > ${notLastChild} {
        margin-right: ${spacing(8)};
    }
    margin-left: ${spacing(5)};
`;

export const FilterViewConditions = styled.div.withConfig(propsBlocker)<
    FilterViewConditionsPropsType
>`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${spacing(-2)};
    margin-right: ${spacing(-2)};
`;