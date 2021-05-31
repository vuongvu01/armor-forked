import styled from 'styled-components';
import { FileUploadButtonRootPropsType } from './type';
import { marginAttributes, propsBlocker } from '../../system';
import { reset, typography } from '../../system/mixins';

/** 👉 ROOT ELEMENT */
export const FileUploadButtonRoot = styled.div.withConfig(propsBlocker)<
    FileUploadButtonRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};
    ${marginAttributes};

    display: inline-block;
`;
