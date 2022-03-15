import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    token,
} from '@deliveryhero/armor-system';

import { FilterEditorHeaderRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const FilterEditorHeaderRoot = styled.div.withConfig(
    propsBlocker,
)<FilterEditorHeaderRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    display: flex;
    justify-content: ${({ leftAligned }) =>
        leftAligned ? 'flex-start' : 'space-between'};
    align-items: baseline;
    ${getComponentOverride('FilterEditorHeader')};
    ${marginProps};
`;
