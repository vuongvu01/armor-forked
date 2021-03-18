import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { ObjectLiteralType } from '../../type';

type LinkEffectivePropsType = Partial<{
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    focused?: boolean;
    pressed?: boolean;
    disabled?: boolean;
    inline?: boolean;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginAttributesType &
    ObjectLiteralType;

export type LinkPropsType = LinkEffectivePropsType & ComponentStylePropsType;

export type LinkRootPropsType = LinkEffectivePropsType &
    ComponentElementStylePropsType;
