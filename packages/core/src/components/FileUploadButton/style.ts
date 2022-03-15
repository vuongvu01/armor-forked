import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    reset,
    token,
    typography,
} from '@deliveryhero/armor-system';

import { FileUploadButtonRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const FileUploadButtonRoot = styled.div.withConfig(
    propsBlocker,
)<FileUploadButtonRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    display: inline-block;
    ${marginProps};
`;
