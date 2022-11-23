import { ComponentPropsWithoutRef } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type MultilineTruncateParagraphEffectivePropsType = Partial<{
    typographyProps: Record<string, any>;
    numOfLines: number;
    truncated: boolean;
    onChangeOverflow: (isOverflow: boolean) => void;
}> &
    ComponentPropsWithoutRef<'div'> &
    MarginPropsType;

export type MultilineTruncateParagraphPropsType =
    MultilineTruncateParagraphEffectivePropsType & ComponentStylePropsType;

export type MultilineTruncateParagraphRootPropsType =
    MultilineTruncateParagraphEffectivePropsType &
        ComponentElementStylePropsType;
