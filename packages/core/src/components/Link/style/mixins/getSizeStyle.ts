import { typography } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getSizeStyle = ({ small, medium, large }: LinkRootPropsType) => {
    if (small) {
        return css`
            ${typography('paragraphSmall')};
        `;
    }

    if (medium) {
        return css`
            ${typography('paragraphMedium')};
        `;
    }

    if (large) {
        return css`
            ${typography('paragraphLarge')};
        `;
    }

    return undefined;
};

export default getSizeStyle;
