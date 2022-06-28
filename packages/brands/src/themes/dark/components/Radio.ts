import { css } from 'styled-components';
import {
    color,
    getOutlineFocusStyleFromColor,
    colorGrey50,
    colorGrey70,
    colorGrey40,
} from '@deliveryhero/armor-system';
import { RadioPropsType } from '@deliveryhero/armor';

export const getRadioOverride = ({ disabled }: RadioPropsType) => {
    const result = css`
        .Radio-Input {
            &:focus-visible + .Radio-Label:before {
                ${getOutlineFocusStyleFromColor('primary.03')};
                border-color: ${color('primary.03')};
            }
        }
    `;

    if (disabled) {
        return css`
            ${result};

            &&& {
                .Radio-Label {
                    &:before {
                        border-color: ${colorGrey50};
                        background-color: ${colorGrey70};
                    }

                    &:after {
                        background-color: ${colorGrey40};
                    }
                }
            }
        `;
    }

    return css`
        ${result};

        &&& {
            .Radio-Label {
                &:before {
                    background-color: ${color('neutral.10')};
                }
            }
        }
    `;
};
