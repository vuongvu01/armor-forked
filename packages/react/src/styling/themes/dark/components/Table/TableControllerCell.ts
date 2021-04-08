import { css } from 'styled-components';
import { colorGrey60 } from '../../../../../tokens';
import { color } from '../../../../../system';

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
