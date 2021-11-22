import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CancelIcon } from '@deliveryhero/armor-icons';
import {
    borderRadius,
    color,
    pixelToRem,
    reset,
    spacing,
    propsBlocker,
    getComponentOverride,
    marginProps,
} from '@deliveryhero/armor-system';

import { CloseButtonRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const CloseButtonRoot = styled.div.withConfig(propsBlocker)<
    CloseButtonRootPropsType
>`
    ${reset()};
    display: flex;
    justify-content: flex-end;
    color: ${color('neutral.11')};
    height: min-content;
    width: min-content;
    cursor: pointer;
    flex: 0 0 auto;
    border: 0 none;
    outline: none;
    font-size: ${pixelToRem(16)};
    &:hover {
        background-color: ${color('neutral.02')};
        border-radius: ${borderRadius('pill')};
    }
    ${getComponentOverride('CloseButton')};
    ${marginProps};
`;

export const CloseButtonIcon = styled(CancelIcon)`
    outline: none;
    margin: ${spacing(2)};
`;
