import styled from 'styled-components';
import { FilterEditorActionsRootPropsType } from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const FilterEditorActionsRoot = styled.div.withConfig(propsBlocker)<
    FilterEditorActionsRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    display: flex;
    ${getComponentOverride('FilterEditorActions')};
    ${marginAttributes};
`;
