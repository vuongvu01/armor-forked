import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { ListItemPropsType } from '@deliveryhero/armor';

export const getListItemOverride = ({ disabled }: ListItemPropsType) => {
    let result = css`
        .ListItem-PrimaryItem {
            color: ${color('neutral.06')};
        }

        .ListItem-LeadSubtitle,
        .ListItem-SecondaryList {
            color: ${color('neutral.05')};
        }

        .ListItem-PrimaryIconWrapper {
            background: ${color('neutral.09')};
        }
    `;

    if (disabled) {
        result = css`
            ${result}
            .ListItem-PrimaryItemContainer, .ListItem-PrimaryIcon {
                color: ${color('neutral.07')};
            }
        `;
    } else {
        result = css`
            ${result}
            &:hover {
                background: ${color('neutral.02')};
            }
        `;
    }

    return result;
};
