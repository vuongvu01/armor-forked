import { color } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getVisitedStyle = ({ disabled }: LinkRootPropsType) => {
    if (disabled) {
        return undefined;
    }

    return css`
        &:visited:not(:focus-visible) {
            color: ${color('visited.02')};

            &:after {
                background-color: ${color('visited.02')};
            }
        }
    `;
};

export default getVisitedStyle;
