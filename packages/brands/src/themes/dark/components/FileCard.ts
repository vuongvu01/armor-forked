import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { FileCardBodyPropsType } from '@deliveryhero/armor/src/components/FileCard/type';

const getFileCardBodyOverride = ({
    error,
    uploadProgress,
}: FileCardBodyPropsType) => {
    let result = css`
        border-color: ${color('neutral.07')};
        background-color: ${color('neutral.10')};
    `;

    if (error) {
        result = css`
            ${result};
            border-color: ${color('error.04')};
        `;
    }

    if (uploadProgress || uploadProgress === 0) {
        result = css`
            ${result};
            background-color: ${color('neutral.09')};
        `;
    }

    return result;
};

export const getFileCardOverride = (props: FileCardBodyPropsType) => {
    const { uploadProgress, error } = props;
    const isUploading = (!!uploadProgress || uploadProgress === 0) && !error;

    let result = css`
        .FileCard-Body {
            ${getFileCardBodyOverride(props)}
        }

        .FileCard-CancelIcon {
            color: ${color('primary.03')};
        }

        .FileCard-DeleteIcon {
            color: ${color('error.04')};
        }

        .FileCard-FileIcon {
            color: ${color('neutral.06')};
        }

        .FileCard-FormFieldErrorMessage {
            color: ${color('error.04')};
        }

        .FileCard-FileSize {
            color: ${color('neutral.05')};
        }
    `;

    if (isUploading) {
        result = css`
            ${result};
            .FileCard-FileImageContainer {
                svg {
                    color: ${color('neutral.04')};
                }
            }
        `;
    }

    return result;
};
