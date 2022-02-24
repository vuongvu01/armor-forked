import styled, { css } from 'styled-components';
import {
    fixedCover,
    getComponentOverride,
    propsBlocker,
    durationNormal,
} from '@deliveryhero/armor-system';

import { BackdropRootPropsType } from './type';

export const BackdropRoot = styled.div.withConfig(
    propsBlocker,
)<BackdropRootPropsType>`
    ${fixedCover};
    z-index: inherit;
    ${({ display, effectToggle, disableEffects }: BackdropRootPropsType) => css`
        opacity: ${effectToggle ? 1 : 0};
        display: ${display ? 'initial' : 'none'};
        transition: ${disableEffects
            ? 'none'
            : `opacity ${durationNormal}ms ease`};
        background-color: rgba(0, 0, 0, 0.5);
    `}

    ${getComponentOverride('Backdrop')};
`;
