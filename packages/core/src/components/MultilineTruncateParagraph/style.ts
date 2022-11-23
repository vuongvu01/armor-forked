import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    token,
} from '@deliveryhero/armor-system';
import { MultilineTruncateParagraphRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const MultilineTruncateParagraphRoot = styled.div.withConfig(
    propsBlocker,
)<MultilineTruncateParagraphRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${getComponentOverride('MultilineTruncateParagraph')};
    ${marginProps};
`;
