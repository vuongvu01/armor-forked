import { color } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getHoverStyle = ({ disabled, focused }: LinkRootPropsType) => {
    if (disabled || focused) {
        return undefined;
    }

    return css`
        &:hover:not(:active, :focus-visible) {
            color: ${color('primary.05')};

            &:after {
                background-color: ${color('primary.05')};
            }
        }
    `;
};

export default getHoverStyle;
