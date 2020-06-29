import { HTMLAttributes } from 'react';
import { MarginAttributesType } from 'src/system/attributes';
import { ScalarType } from 'src/type';

export type MaterialIconPropsType = {
    fontSize?: ScalarType;
    icon?: string;
} & HTMLAttributes<HTMLSpanElement> &
    MarginAttributesType;
