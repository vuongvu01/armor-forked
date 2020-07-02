import { HTMLAttributes } from 'react';
import { MarginAttributesType } from '../../system/attributes';
import { ScalarType } from '../../type';

export type MaterialIconPropsType = {
    fontSize?: ScalarType;
    icon?: string;
} & HTMLAttributes<HTMLSpanElement> &
    MarginAttributesType;
