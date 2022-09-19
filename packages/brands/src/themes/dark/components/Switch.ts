import { css } from 'styled-components';
import {
    color,
    colorGrey00,
    colorGrey30,
    colorGrey50,
    colorGrey60,
    colorGrey80,
    getFocusStyleFromColor,
} from '@deliveryhero/armor-system';

export const getSwitchOverride = () => {
    const result = css`
        .Switch-Label {
            background-color: ${colorGrey50};
            &:after {
                background-color: ${colorGrey00};
            }
        }

        .Switch-CheckboxInput:checked:disabled + .Switch-Label {
            background-color: ${colorGrey50};
            &:after {
                background-color: ${colorGrey30};
            }
        }

        .Switch-CheckboxInput:not(:checked):disabled + .Switch-Label {
            background-color: ${colorGrey60};
            &:after {
                background-color: ${colorGrey30};
            }
        }

        .Switch-CheckboxInput:checked + .Switch-Label {
            background-color: ${color('primary.03')};
            &:hover {
                background-color: ${color('primary.02')};
            }
        }

        .Switch-CheckboxInput:not(:checked) + .Switch-Label:hover {
            background-color: ${colorGrey30};
        }

        .Switch-CheckboxInput {
            &:focus-visible + .Switch-Label {
                ${getFocusStyleFromColor('primary.03', colorGrey80)}
            }
        }
    `;

    return result;
};
