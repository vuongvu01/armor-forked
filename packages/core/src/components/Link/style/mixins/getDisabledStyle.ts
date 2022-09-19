import { color, mouseCursor } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getDisabledStyle = ({ disabled }: LinkRootPropsType) => {
    if (!disabled) {
        return undefined;
    }

    return css`
        color: ${color('neutral.05')};
        ${mouseCursor({ disabled })}

        &&:after {
            background-color: ${color('neutral.05')};
        }
    `;
};

export default getDisabledStyle;
