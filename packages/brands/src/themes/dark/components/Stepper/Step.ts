import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getStepOverride = ({
    isActivityLogView,
}: {
    isActivityLogView: boolean;
}) => {
    let result = css`
        .Step-Line {
            background-color: ${color('primary.03')};
        }
        &.Step-Root--active {
            .Step-Line {
                background-color: ${color('neutral.05')};
            }
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
        }
        &.Step-Root--error {
            .Step-Wrapper {
                background-color: ${color('error.02')};
            }
        }
        .Step-Description {
            color: ${color('neutral.04')};
        }
        &.Step-Root--log {
            .Step-Line {
                background-color: ${color('neutral.07')};
            }
            .Step-Wrapper {
                border-color: ${color('neutral.07')};
            }
            svg {
                color: ${color('neutral.06')};
            }
        }
        &.Step-Root--warning {
            .Step-Line {
                background-color: ${color('warning.02')};
            }
        }
        &.Step-Root--info {
            .Step-Wrapper {
                background-color: ${color('primary.02')};
            }
        }
        &.Step-Root--success {
            .Step-Line {
                background-color: ${color('success.03')};
            }
            .Step-Wrapper {
                background-color: ${color('success.02')};
            }
        }
    `;

    // set hover selector styles when the Stepper is not in ActivityLog view
    if (!isActivityLogView) {
        result = css`
            ${result};
            &.Step-Root--complete .Step-Button:hover .Step-Wrapper {
                border-color: ${color('neutral.07')};
            }

            &.Step-Root--warning .Step-Button:hover .Step-Wrapper {
                border-color: ${color('warning.05')};
            }

            &.Step-Root--error .Step-Button:hover .Step-Wrapper {
                border-color: ${color('error.06')};
            }
            &:not(.Step-Root--incomplete, .Step-Root--active)
                .Step-Button:hover
                .Step-Title {
                color: ${color('primary.02')};
            }
        `;
    }

    return result;
};
