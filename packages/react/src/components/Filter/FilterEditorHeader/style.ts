import styled from 'styled-components';
import { FilterEditorHeaderRootPropsType } from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
} from '../../../system';

/** 👉 ROOT ELEMENT */
export const FilterEditorHeaderRoot = styled.div.withConfig(propsBlocker)<
    FilterEditorHeaderRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    display: flex;
    justify-content: ${({ leftAligned }) =>
        leftAligned ? 'flex-start' : 'space-between'};
    align-items: baseline;
    ${getComponentOverride('FilterEditorHeader')};
    ${marginAttributes};
`;
