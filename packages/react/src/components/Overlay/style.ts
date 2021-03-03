import styled, { css } from 'styled-components';

import { getPropsBlocker } from '../../utils';
import { OverlayRootPropsType } from './type';
import { fixedCover } from '../../system/mixins';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const propertyList = {
    disableEffects: true,
    disableOverlay: true,
    effectToggle: true,
};

export const Overlay = styled.div.withConfig(getPropsBlocker(propertyList))<
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
