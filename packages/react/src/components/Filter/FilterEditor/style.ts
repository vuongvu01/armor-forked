import styled, { css } from 'styled-components';
import {
    FilterEditorRootPropsType,
    FilterEditorHeaderPropsType,
    FilterEditorFieldsPropsType,
    FilterEditorActionsPropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    paddingAttributes,
    notLastChild,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const FilterEditorRoot = styled.div.withConfig(propsBlocker)<
    FilterEditorRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

    ${getComponentOverride('FilterEditor')};
    ${marginAttributes};
    ${paddingAttributes};
`;

export const FilterEditorHeader = styled.div.withConfig(propsBlocker)<
    FilterEditorHeaderPropsType
>`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${spacing(8)};
`;

export const FilterEditorFields = styled.div.withConfig(propsBlocker)<
    FilterEditorFieldsPropsType
>`
    > ${notLastChild} {
        margin-bottom: ${spacing(8)};
    }
`;

export const FilterEditorActions = styled.div.withConfig(propsBlocker)<
    FilterEditorActionsPropsType
>`
    margin-top: ${spacing(8)};
    display: flex;
`;
