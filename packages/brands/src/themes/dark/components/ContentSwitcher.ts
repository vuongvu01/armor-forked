import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { ContentSwitcherControlPropsType } from '@deliveryhero/armor';

export const getContentSwitcherOverride = ({
    selected,
}: ContentSwitcherControlPropsType) => {
    let result = css`
        background-color: ${color('neutral.01')};
        .ContentSwitcherControl-Root {
            background-color: ${color('neutral.01')};
            & > * {
                color: ${color('neutral.06')};
            }
            &::before {
                background-color: ${color('neutral.08')};
            }
            &:hover > * {
                color: ${color('primary.02')};
            }
            &:active {
                background-color: ${color('neutral.08')};
                color: ${color('primary.04')};
            }
        }
    `;

    if (selected) {
        result = css`
            ${result}
            .ContentSwitcherControl-Root {
                background-color: ${color('neutral.09')};
                &:first-of-type,
                &:last-of-type {
                    border-color: ${color('primary.03')};
                }
                & > * {
                    color: ${color('primary.03')} !important;
                }
                &::before {
                    content: none;
                }
            }
        `;
    }

    return result;
};
