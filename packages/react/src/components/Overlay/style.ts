import styled, { css } from 'styled-components';

import { shouldForwardProp } from '../../utils';
import { OverlayRootPropsType } from './type';
import { fixedCover } from '../../system/mixins';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const blacklistProperties = { disableEffects: true, effectToggle: true };

export const Overlay = styled.div.withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, blacklistProperties),
})<OverlayRootPropsType>`
    ${fixedCover};
    z-index: inherit;
    pointer-events: none;
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
