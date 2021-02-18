import { css } from 'styled-components';
import { color } from '../system';

export const popperArrowPlacement = (arrowClassName: string) => css`
    &[data-popper-placement^='top'] > .${arrowClassName} {
        bottom: -8px;
    }
    &[data-popper-placement^='bottom'] > .${arrowClassName} {
        top: -8px;
    }
`;

export const popperArrow = () => css`
    height: 16px;
    width: 16px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        background-color: ${color('neutral.00')};
        width: 10px;
        height: 10px;
        content: '';
        transition: transform 200s ease-out;
        transform: rotate(45deg);
        transform-origin: center;
    }
`;
