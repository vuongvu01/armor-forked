import { css } from 'styled-components';
import {
    color,
    token,
    colorGrey70,
    colorRed30,
} from '@deliveryhero/armor-system';
import { TextInputPropsType } from '@deliveryhero/armor';

export const getTextInputOverride = ({
    disabled,
    outlined,
    error,
}: TextInputPropsType) => {
    let result = css`
        background-color: ${token('body.backgroundColor')};

        .TextInput-Label {
            color: ${color('neutral.05')};
        }
        .TextInput-LabelBackground {
            color: ${color('neutral.05')};
            background: linear-gradient(
                0,
                ${token('body.backgroundColor')} 88%,
                transparent 32%
            );
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            border-color: ${colorGrey70};

            .TextInput-LabelBackground {
                background: linear-gradient(
                    0,
                    transparent 0 30%,
                    ${token('body.backgroundColor')} 30% 70%,
                    transparent 70% 100%
                );
            }
        `;
    }

    if (!outlined && !error && !disabled) {
        result = css`
            ${result};
            border-color: ${color('neutral.03')};
        `;
    }

    if (error) {
        result = css`
            ${result};
            border-color: ${colorRed30};
        `;
    }

    return result;
};
