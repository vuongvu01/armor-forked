import { css } from 'styled-components';

import { color } from '../../../../../system';

export const getStepOverride = (props: any) => {
    return css`
        .Step-Line {
            background-color: ${color('primary.03')};
        }
        &.Step-Root--active ~ .Step-Root {
            .Step-Line {
                background-color: ${color('neutral.05')};
            }
        }
        &.Step-Root--active {
            .Step-Wrapper {
                background-color: ${color('primary.02')};
            }
        }
        &.Step-Root--complete {
            .Step-Wrapper {
                background-color: ${color('neutral.08')};
                svg {
                    color: ${color('primary.03')};
                }
            }
            :hover .Step-Piece > .Step-Wrapper {
                border-color: ${color('neutral.07')};
            }
        }
        &.Step-Root--warning {
            .Step-Wrapper {
                background-color: ${color('warning.01')};
            }
            :hover .Step-Peice > .Step-Wrapper {
                border-color: ${color('warning.05')};
            }
        }
        &.Step-Root--error {
            .Step-Wrapper {
                background-color: ${color('error.02')};
            }
            :hover .Step-Piece > .Step-Wrapper {
                border-color: ${color('error.06')};
            }
        }
        .Step-Description {
            color: ${color('neutral.04')};
        }
        &:not(.Step-Root--incomplete, .Step-Root--active) button {
            :hover {
                .Step-Title {
                    color: ${color('primary.02')};
                }
            }
        }
    `;
};
