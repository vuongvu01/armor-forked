import { css } from 'styled-components';
import { colorGrey30, colorGrey50, colorGrey60 } from '../../../../tokens';

export const getPageNavigationOverride = () => {
    return css`
        .PageNavigation-ArrowButton[data-disabled=''] {
            color: ${colorGrey30};
        }
        .PageNavigation-ArrowButton[data-disabled='1'] {
            color: ${colorGrey50};
        }

        .PageNavigation-PageButton[data-disabled=''] {
            &:hover {
                background-color: ${colorGrey60};
            }
        }
    `;
};
