import { css } from 'styled-components';
import { token, color } from '@deliveryhero/armor-system';
import { MessagePropsType } from '@deliveryhero/armor';

const getMessageColor = ({
    level,
    error,
    success,
    warning,
}: MessagePropsType) => {
    if (level === 'error' || error) {
        return 'error.04';
    }
    if (level === 'success' || success) {
        return 'success.02';
    }
    if (level === 'warning' || warning) {
        return 'warning.02';
    }

    return 'primary.03';
};

export const getMessageOverride = (props: MessagePropsType) => {
    const levelColor = getMessageColor(props);

    return css`
        background-color: ${token('body.backgroundColor')};
        border-color: ${color(levelColor)};

        .Message-Icon {
            color: ${color(levelColor)};
        }

        .Message-Content {
            color: ${color('neutral.06')};
        }
    `;
};
