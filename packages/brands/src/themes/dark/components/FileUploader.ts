import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getFileUploaderOverride = () => {
    return css`
        .FileUploader-Description {
            color: ${color('neutral.04')};
        }
    `;
};
