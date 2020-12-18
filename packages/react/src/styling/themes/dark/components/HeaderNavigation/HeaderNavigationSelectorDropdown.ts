import { css } from 'styled-components';
import { colorGrey01, colorGrey90 } from '../../../../../tokens';

export const getHeaderNavigationSelectorDropdownOverride = () => css`
    .TextInput-Input {
        background-color: ${colorGrey90};

        ::placeholder {
            color: ${colorGrey01};
            opacity: 1;
        }
    }
    .Dropdown-ExpansionIndicatorContainer {
        background-color: ${colorGrey90};
    }
`;
