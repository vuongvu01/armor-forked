import { color } from '@deliveryhero/armor-system';
import { css } from 'styled-components';

const getRootStyle = () => {
    return css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        color: ${color('primary.07')};
    `;
};

export default getRootStyle;
