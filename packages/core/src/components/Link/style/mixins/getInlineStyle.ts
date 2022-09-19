import {
    color,
    pointerEvents,
    transition,
    spacing,
} from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { LinkRootPropsType } from '../../type';

const getInlineStyle = ({ inline, underline }: LinkRootPropsType) => {
    if (!inline && !underline) {
        return undefined;
    }

    return css`
        z-index: 1;
        position: relative;

        &:after {
            content: '';

            z-index: -1;
            position: absolute;
            left: 0;
            right: 0;
            bottom: ${spacing(-0.25)};
            height: ${spacing(0.25)};

            background-color: ${color('primary.07')};

            ${transition({
                'background-color': true,
            })};

            ${pointerEvents({ disabled: true })}
        }
    `;
};

export default getInlineStyle;
