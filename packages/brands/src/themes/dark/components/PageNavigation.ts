import { css } from 'styled-components';
import { colorGrey50, color } from '@deliveryhero/armor-system';

export const getPageNavigationOverride = () => {
    return css`
        .PageNavigation-PageButton {
            color: ${color('neutral.06')};
        }

        .PageNavigation-ArrowButton[data-disabled=''] {
            color: ${color('neutral.04')};
        }
        .PageNavigation-ArrowButton[data-disabled='1'] {
            color: ${colorGrey50};
        }

        .PageNavigation-PageButton[data-disabled=''] {
            &:hover {
                background-color: ${color('neutral.03')};
            }
        }

        .TextInput-InnerContainer .ExpansionIndicator-Icon {
            color: ${color('primary.03')};
        }

        .Dropdown-TextInput {
            background-color: ${color('neutral.02')};
        }
    `;
};
