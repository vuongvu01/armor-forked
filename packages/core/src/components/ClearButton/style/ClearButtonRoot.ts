import {
    buttonReset,
    propsBlocker,
    reset,
    spacing,
    borderRadius,
    getComponentOverride,
    marginProps,
} from '@deliveryhero/armor-system';
import styled, { css } from 'styled-components';
import { stateStyleMap } from './maps';
import { ClearButtonRootPropsType } from '../type';
import { makeClearButtonIconStyle } from './makeClearButtonIconStyle';
import {
    CLEAR_BUTTON_CLASS_PREFIX,
    CLEAR_BUTTON_SIZE_MAP,
    CLEAR_BUTTON_DEFAULT_SIZE,
} from '../constants';

const clearButtonBaseStyle = ({
    size = CLEAR_BUTTON_DEFAULT_SIZE,
}: ClearButtonRootPropsType) => {
    const sizeValue = CLEAR_BUTTON_SIZE_MAP[size];

    const sizeMixin = css`
        width: ${spacing(sizeValue)};
        height: ${spacing(sizeValue)};
    `;

    return css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: center;

        ${sizeMixin}

        border-radius: ${borderRadius('pill')};

        & > svg {
            ${sizeMixin}
        }
    `;
};

export const ClearButtonRoot = styled.button.withConfig(
    propsBlocker,
)<ClearButtonRootPropsType>`
    ${reset};
    ${buttonReset};

    ${clearButtonBaseStyle}
    ${makeClearButtonIconStyle(stateStyleMap)}

    ${getComponentOverride(CLEAR_BUTTON_CLASS_PREFIX)};
    ${marginProps};
`;
