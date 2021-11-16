import { css } from 'styled-components';
import { colorGrey70 } from '@deliveryhero/armor-system';

export const getContextMenuOverride = () => {
    return css`
        background-color: ${colorGrey70};

        .ContextMenu-Arrow {
            &::before {
                background-color: ${colorGrey70};
            }
        }

        .MenuElement-Root {
            background-color: ${colorGrey70};
        }
    `;
};
