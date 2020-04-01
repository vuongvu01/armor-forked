import { HTMLAttributes } from 'react';
import { SpanOuterAttributesType } from '../../system/attributes';
import { ScalarType } from '../../type';

export type MaterialIconPropsType = {
    fontSize?: ScalarType;
} & HTMLAttributes<HTMLSpanElement> &
    SpanOuterAttributesType;
