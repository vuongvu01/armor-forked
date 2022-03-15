import styled, { css } from 'styled-components';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    reset,
    typography,
    spacing,
    color,
    borderRadius,
    widthProps,
    token,
} from '@deliveryhero/armor-system';
import {
    CancelIcon as CancelIconArmor,
    DeleteIcon as DeleteIconArmor,
    FileCommonTextIcon,
    SVGIconPropsType,
    FileImagePortraitIcon,
    FilePDFIcon as FilePDFIconArmor,
    CsvFileIcon,
} from '@deliveryhero/armor-icons';

import { ProgressBar } from '../ProgressBar';
import {
    FileCardRootPropsType,
    FileCardBodyPropsType,
    FileCardLeftPortionPropsType,
    FileCardRightPortionPropsType,
} from './type';
import { FormFieldMessage, FormFieldMessagePropsType } from '../FormField';

const getBodyStyle = ({ error, uploadProgress }: FileCardRootPropsType) => {
    let result = {};

    if (error) {
        result = css`
            ${result};
            border-color: ${color('error.07')};
        `;
    }

    if (uploadProgress || uploadProgress === 0) {
        result = css`
            ${result};
            background-color: ${color('neutral.02')};
        `;
    }

    return result;
};

const getImageContainerStyle = ({ isUploading }: { isUploading?: boolean }) => {
    const result = {};

    if (isUploading) {
        return css`
            ${result};
            background-color: ${color('neutral.03')};
            svg {
                color: ${color('neutral.05')};
            }
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const FileCardRoot = styled.div.withConfig(
    propsBlocker,
)<FileCardRootPropsType>`
    ${reset};
    ${getComponentOverride('FileCard')};
    ${marginProps};
    ${widthProps};
`;

export const FileCardBody = styled.div.withConfig(
    propsBlocker,
)<FileCardBodyPropsType>`
    border: 1px solid ${color('neutral.03')};
    border-radius: ${borderRadius('soft')};
    display: flex;
    justify-content: space-between;
    padding: ${spacing(2)};
    white-space: nowrap;
    position: relative;
    overflow: hidden;

    ${getBodyStyle};
`;

export const FileCardLeftPortion = styled.div.withConfig(
    propsBlocker,
)<FileCardLeftPortionPropsType>`
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    display: flex;
    align-items: center;
    min-width: 80%;
`;

export const FileCardRightPortion = styled.div.withConfig(
    propsBlocker,
)<FileCardRightPortionPropsType>`
    display: flex;
    align-items: center;
`;

const getIconStyles = (size: number, colorText: string) => css`
    height: ${spacing(size)};
    width: ${spacing(size)};
    color: ${color(colorText)};
`;

const leftIconStyles = css`
    ${getIconStyles(6, 'neutral.11')};
    padding: ${spacing(2)};
    margin-right: ${spacing(2)};
`;

const getRightIconStyles = (size: number, colorText: string) => css`
    ${getIconStyles(size, colorText)};
    padding: ${spacing(1)};
    border-radius: ${borderRadius('soft')};
`;

export const FileTextIcon = styled(FileCommonTextIcon).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${leftIconStyles};
`;

export const FileImageIcon = styled(FileImagePortraitIcon).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${leftIconStyles};
`;

export const FilePDFIcon = styled(FilePDFIconArmor).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${leftIconStyles};
`;

export const FileCSVIcon = styled(CsvFileIcon).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${leftIconStyles};
`;

export const FileImageContainer = styled.div.withConfig(propsBlocker)<{
    isUploading: boolean;
}>`
    width: ${spacing(10)};
    height: ${spacing(10)};
    margin-right: ${spacing(3)};
    border-radius: ${borderRadius('soft')};
    ${getImageContainerStyle}
`;

export const FileImage = styled.img.withConfig(propsBlocker)`
    width: ${spacing(10)};
    height: ${spacing(10)};
    object-fit: cover;
    border-radius: ${borderRadius('soft')};
`;

export const CancelIcon = styled(CancelIconArmor).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${getRightIconStyles(4, 'primary.07')};
`;

export const DeleteIcon = styled(DeleteIconArmor).withConfig(
    propsBlocker,
)<SVGIconPropsType>`
    ${getRightIconStyles(4, 'error.07')};
`;

export const FormFieldErrorMessage = styled(FormFieldMessage).withConfig(
    propsBlocker,
)<FormFieldMessagePropsType>`
    margin-left: 0;
    color: ${color('error.07')};
`;

export const FileName = styled.div.withConfig(
    propsBlocker,
)<FormFieldMessagePropsType>`
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 0 1 auto;
`;

export const FileExtension = styled.div.withConfig(
    propsBlocker,
)<FormFieldMessagePropsType>`
    margin-right: ${spacing(2)};
`;

export const FileSize = styled.div.withConfig(
    propsBlocker,
)<FormFieldMessagePropsType>`
    ${typography('paragraphMedium')};
    color: ${color('neutral.07')};
`;

export const UploadBar = styled(ProgressBar)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;
