import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { MarginAttributesType } from '../../system/attributes';
import {
    ButtonOverridableAttributesType,
    ButtonStyleOverrideType,
} from '../Button/type';

type DialogAttributesType = HTMLAttributes<HTMLElement>;

export type DialogOverridableAttributesType = {
    megaprop?: string;
};
export type DialogAttributeOverrideType = {
    buttonYes?: ButtonOverridableAttributesType;
    buttonNo?: ButtonOverridableAttributesType;
};
export type DialogStyleOverrideType = {
    root?: DialogStylesFunctionType;
    buttonPanel?: StylesFunctionOrStubType;
    closeButton?: StylesFunctionOrStubType;
    buttonYes?: ButtonStyleOverrideType;
    buttonNo?: ButtonStyleOverrideType;
};

export type DialogStylesFunctionType = StylesFunctionOrStubType<
    DialogAttributesType
>;
export type DialogStyleOverrideSafeType = Required<DialogStyleOverrideType>;

export type DialogPropsType = DialogOverridableAttributesType &
    ComponentAttributesType<
        DialogAttributeOverrideType,
        DialogAttributesType,
        DialogStyleOverrideType
    > &
    MarginAttributesType;
