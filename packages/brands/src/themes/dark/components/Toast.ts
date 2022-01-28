/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css } from 'styled-components';
import { color, focus } from '@deliveryhero/armor-system';
import { ToastPropsType } from '@deliveryhero/armor';

export const getToastOverride = ({
    level,
    success,
    info,
    error,
    warning,
}: ToastPropsType) => {
    let result = css`
        .Message-Icon,
        .Message-Content,
        .CloseButton-Root,
        .MessageAction-Root {
            color: ${color('neutral.11')};
        }
        .CloseButton-Root {
            ${focus({ mainColor: 'neutral.11' })};
        }
    `;

    if (level === 'error' || error) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('error.04')};
            }
            .CloseButton-Root:hover {
                background-color: ${color('error.03')};
            }
        `;
    }
    if (level === 'warning' || warning) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('warning.04')};
            }
            .CloseButton-Root:hover {
                background-color: ${color('warning.03')};
            }
        `;
    }
    if (level === 'info' || info) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('primary.03')};
            }
            .CloseButton-Root:hover {
                background-color: ${color('primary.02')};
            }
        `;
    }
    if (level === 'success' || success) {
        result = css`
            ${result};
            .Message-Root {
                background-color: ${color('success.05')};
            }
            .CloseButton-Root:hover {
                background-color: ${color('success.04')};
            }
        `;
    }

    return result;
};
