import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    token,
} from '@deliveryhero/armor-system';
import { FileUploaderRootPropsType } from './type';
import { FileUploadButton } from '../FileUploadButton';

/** 👉 ROOT ELEMENT */
export const FileUploaderRoot = styled.div.withConfig(
    propsBlocker,
)<FileUploaderRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${getComponentOverride('FileUploader')};
    ${marginProps};
`;

export const Title = styled.div.withConfig(propsBlocker)`
    ${typography('sectionTitle')};
    color: ${token('body.color')};
`;

export const Description = styled.div.withConfig(propsBlocker)`
    ${typography('paragraphLarge')};
    color: ${color('neutral.07')};
    margin-top: ${spacing(2)};
`;

export const UploadButton = styled(FileUploadButton)`
    margin-top: ${spacing(4)};
`;
