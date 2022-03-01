import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    reset,
    typography,
} from '@deliveryhero/armor-system';

import { FileUploadButtonRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const FileUploadButtonRoot = styled.div.withConfig(
    propsBlocker,
)<FileUploadButtonRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    ${marginProps};

    display: inline-block;
`;
