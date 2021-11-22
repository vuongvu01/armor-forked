import { css } from 'styled-components';
import { colorGrey60, color } from '@deliveryhero/armor-system';

export const getTableControllerCellOverride = () => {
    return css`
        .TableControllerCell-Trigger {
            &:hover {
                background-color: ${colorGrey60};
                color: ${color('primary.main')};
            }
        }
    `;
};
