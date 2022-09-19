import { css } from 'styled-components';
import {
    color,
    token,
    colorGrey60,
    colorGrey70,
    colorRed30,
    colorGrey30,
} from '@deliveryhero/armor-system';
import { TextInputPropsType } from '@deliveryhero/armor';

export const getTextInputOverride = ({
    disabled,
    outlined,
    error,
}: TextInputPropsType) => {
    let result = css`
        background-color: ${token('body.backgroundColor')};
        border-color: ${color('neutral.03')};

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

    if (outlined) {
        result = css`
            ${result};
            border-color: ${color('primary.03')};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            border-color: ${colorGrey60};
            background-color: ${colorGrey70};

            .TextInput-LabelBackground {
                background: linear-gradient(
                    0,
                    transparent 0 30%,
                    ${colorGrey70} 30% 70%,
                    transparent 70% 100%
                );
            }

            .TextInput-Input {
                color: ${colorGrey30};
            }
        `;
    }

    if (error) {
        result = css`
            ${result};
            border-color: ${colorRed30};
            background-color: ${colorGrey70};

            .TextInput-LabelBackground {
                background: linear-gradient(
                    0,
                    ${colorGrey70} 88%,
                    transparent 32%
                );
            }
        `;
    }

    return result;
};
