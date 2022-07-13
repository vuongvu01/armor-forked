import { css } from 'styled-components';
import { focus } from '@deliveryhero/armor-system';
import {
    CLEAR_BUTTON_CLASS_PREFIX,
    CLEAR_BUTTON_DEFAULT_STATE,
    CLEAR_BUTTON_DEFAULT_TYPE,
    CLEAR_BUTTON_TYPE_CLASSNAME_MAP,
} from '../constants';
import {
    ClearButtonRootPropsType,
    ClearButtonTypeStateStyleMap,
} from '../type';

import { focusStyleMap } from './maps';

export const makeClearButtonIconStyle =
    (styleMap: ClearButtonTypeStateStyleMap) =>
    ({
        _type: type = CLEAR_BUTTON_DEFAULT_TYPE,
        state = CLEAR_BUTTON_DEFAULT_STATE,
    }: ClearButtonRootPropsType) => {
        const style = styleMap[type];

        const classname = `${CLEAR_BUTTON_CLASS_PREFIX}-${CLEAR_BUTTON_TYPE_CLASSNAME_MAP[type]}`;

        return css`
            .${classname}--${state} {
                ${style[state]}
            }

            &:not(:disabled) {
                [class*='${classname}'] {
                    &:hover {
                        ${style.hover}
                    }

                    &:active {
                        ${style.pressed}
                    }
                }
            }

            ${focus(focusStyleMap[type])}
        `;
    };
