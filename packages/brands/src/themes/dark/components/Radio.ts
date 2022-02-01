import { css } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
} from '@deliveryhero/armor-system';
import { RadioPropsType } from '@deliveryhero/armor';

export const getRadioOverride = ({ disabled }: RadioPropsType) => {
    let result = css`
        .Radio-Input {
            &:focus-visible + .Radio-Label:before {
                ${getOutlineFocusStyleFromColor('primary.03')};
                border-color: ${color('primary.03')};
            }
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            &&& {
                .Radio-Label {
                    &:before {
                        border-color: ${color('neutral.07')};
                        background-color: ${color('neutral.03')};
                    }
                    &:after {
                        background-color: ${color('neutral.05')};
                    }
                }
            }
        `;
    } else {
        result = css`
            ${result};
            &&& {
                .Radio-Label {
                    &:before {
                        background-color: ${color('neutral.10')};
                    }
                }
            }
        `;
    }

    return result;
};
