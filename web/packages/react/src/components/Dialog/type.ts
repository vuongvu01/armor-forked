import { HTMLAttributes } from 'react';
import { StylesFunctionOrStubType, ComponentAttributesType } from '../type';
import { SizeAttributesType } from '../../system/attributes';
import { ThemeType } from '../../styling';
import { Indexed, ObjectLiteralType } from '../../type';
import { ModalPropsType } from '../Modal/type';

export type DialogCustomPropsType = Indexed<{
    disableOverlay?: boolean;
    disableEffects?: boolean;
    disableCloseButton?: boolean;
    scroll?: 'document' | 'dialog';
}> &
    Pick<ModalPropsType, 'open' | 'onClose'>;

type DialogHTMLPropsType = HTMLAttributes<HTMLElement>;

export type DialogPropsType = DialogCustomPropsType &
    ComponentAttributesType<
        DialogAttributeOverrideType,
        DialogHTMLPropsType,
        DialogStyleOverrideType
    > &
    SizeAttributesType;

export type DialogAttributeOverrideType = {
    Root?: DialogCustomPropsType;
};
export type DialogStyleOverrideType = {
    Overlay?: DialogStylesFunctionType;
    Container?: DialogStylesFunctionType;
    Root?: DialogStylesFunctionType;
    CloseButton?: DialogStylesFunctionType;
};

export type DialogStylesFunctionType = StylesFunctionOrStubType<
    DialogHTMLPropsType
>;
export type DialogStyleOverrideSafeType = Required<DialogStyleOverrideType>;

// for styling

export type DialogRootStylePropsType = DialogPropsType & {
    display: boolean;
    effectToggle: boolean;
    theme: ThemeType;
    styles: DialogStylesFunctionType;
};

export type DialogThemeType = Indexed<{
    base: ObjectLiteralType;
}>;
