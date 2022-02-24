import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
} from '@deliveryhero/armor-system';

import { FilterEditorActionsRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const FilterEditorActionsRoot = styled.div.withConfig(
    propsBlocker,
)<FilterEditorActionsRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    display: flex;
    ${getComponentOverride('FilterEditorActions')};
    ${marginProps};
`;
