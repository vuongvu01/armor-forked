import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
} from '@deliveryhero/armor-system';

import { FilterEditorHeaderRootPropsType } from './type';

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
    ${marginProps};
`;
