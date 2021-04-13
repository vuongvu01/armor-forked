import styled, { css } from 'styled-components';

import { OverlayRootPropsType } from './type';
import { fixedCover, getComponentOverride, propsBlocker } from '../../system';
import { transitionDurationInSec } from '../../constants';

export const Overlay = styled.div.withConfig(propsBlocker)<
    OverlayRootPropsType
>`
    ${fixedCover};
    z-index: inherit;
    ${({ display, effectToggle, disableEffects }: OverlayRootPropsType) => css`
        opacity: ${effectToggle ? 1 : 0};
        display: ${display ? 'initial' : 'none'};
        transition: ${disableEffects
            ? 'none'
            : `opacity ${transitionDurationInSec}s ease`};
        background-color: rgba(0, 0, 0, 0.5);
    `}

    ${getComponentOverride('Overlay')};
`;
