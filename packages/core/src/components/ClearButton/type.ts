import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import { WithChildren } from '../../type';

import { ComponentElementStylePropsType } from '../type';

export type ClearButtonType = 'circle-filled' | 'thin';

export type ClearButtonState = 'enabled' | 'hover' | 'pressed' | 'disabled';

export type ClearButtonIconSize = 'small' | 'medium' | 'large';

export type ClearButtonSize = 'medium' | 'large';

type ClearButtonProps = {
    type?: ClearButtonType;
    state?: ClearButtonState;
    iconSize?: ClearButtonIconSize;
    size?: ClearButtonSize;
};

type ClearButtonEffectivePropsType = ClearButtonProps &
    Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'children'> &
    MarginPropsType;

export type ClearButtonPropsType = ClearButtonEffectivePropsType;

export type ClearButtonRootPropsType = WithChildren<
    Omit<ClearButtonEffectivePropsType, 'children' | 'type'> &
        ComponentElementStylePropsType & {
            _type?: ClearButtonType;
        }
>;

export type ClearButtonIconPropsType = Pick<
    ClearButtonEffectivePropsType,
    'state'
>;

export type ClearButtonStateStyleMap = Record<
    ClearButtonState,
    ReturnType<typeof css>
>;

export type ClearButtonTypeStateStyleMap = Record<
    ClearButtonType,
    ClearButtonStateStyleMap
>;

export type ClearButtonTypeFocusStyleMap = Record<
    ClearButtonType,
    Record<string, boolean | string> | undefined
>;
