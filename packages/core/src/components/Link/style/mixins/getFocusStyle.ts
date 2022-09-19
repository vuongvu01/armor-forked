import { borderRadius, color, spacing } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getFocusStyle = ({ disabled, inline, underline }: LinkRootPropsType) => {
    if (disabled) {
        return undefined;
    }

    const isInline = inline || underline;

    return css`
        outline: none;

        &:focus-visible {
            z-index: 1;
            position: relative;
            color: ${color('primary.07')};

            &:before {
                content: '';

                z-index: -1;
                position: absolute;
                left: ${spacing(-1)};
                right: ${spacing(-1)};
                top: 0;
                bottom: ${isInline ? spacing(-0.25) : 0};

                border-radius: ${borderRadius('soft')};
                background-color: ${color('primary.02')};
            }
        }
    `;
};

export default getFocusStyle;
