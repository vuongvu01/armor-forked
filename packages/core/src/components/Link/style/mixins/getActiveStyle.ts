import { color } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getActiveStyle = ({ disabled }: LinkRootPropsType) => {
    if (disabled) {
        return undefined;
    }

    return css`
        &:active {
            color: ${color('primary.10')};

            &:after {
                background-color: ${color('primary.10')};
            }
        }
    `;
};

export default getActiveStyle;
