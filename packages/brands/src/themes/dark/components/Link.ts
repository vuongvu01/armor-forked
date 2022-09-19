import { css } from 'styled-components';
import {
    color,
    colorBlue10,
    colorBlue20,
    colorBlue30,
    colorGrey30,
    colorPurple20,
} from '@deliveryhero/armor-system';
import { LinkPropsType } from '@deliveryhero/armor';

export const getLinkOverride = ({ disabled }: LinkPropsType) => {
    if (disabled) {
        return css`
            color: ${colorGrey30};

            &:after {
                background-color: ${colorGrey30};
            }
        `;
    }

    return css`
        color: ${colorBlue20};

        &:after {
            background-color: ${colorBlue20};
        }

        &:hover:not(:active, :focus-visible) {
            color: ${colorBlue10};

            &:after {
                background-color: ${colorBlue10};
            }
        }

        &:active {
            color: ${colorBlue30};

            &:after {
                background-color: ${colorBlue30};
            }
        }

        &:focus-visible {
            color: ${colorBlue20};

            &:before {
                background-color: ${color('colorBlue20', 0.2)};
            }
        }

        &:visited {
            color: ${colorPurple20};

            &:after {
                background-color: ${colorPurple20};
            }
        }
    `;
};
