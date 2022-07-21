import { css } from 'styled-components';
import { colorGrey70, colorGrey60 } from '@deliveryhero/armor-system';
import { MenuElementPropsType } from '@deliveryhero/armor';

export const getContextMenuOverride = ({
    selected,
}: MenuElementPropsType) => {
    return css`
        background-color: ${colorGrey70};

        .ContextMenu-Arrow {
            &::before {
                background-color: ${colorGrey70};
            }
        }

        .MenuElement-Root {
            background-color: ${colorGrey70};

            &:hover {
                background-color: ${selected
                    ? colorGrey70
                    : colorGrey60};
            }
        }
    `;
};
