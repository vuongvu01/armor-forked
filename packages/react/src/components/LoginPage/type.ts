import { HTMLAttributes, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system';
import { LinkTagType } from '../Link/type';
import { TextInputPropsType } from '../TextInput/type';

/** 👉 PROPS TYPE */
export type LoginPageEffectivePropsType = Partial<{
    header: ReactNode;
    title: ReactNode;
    greetingTitle: string;
    greetingDescription: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    enableRegistration: boolean;
    enableLoginForm: boolean;
    registrationHref: string;
    registrationTag: LinkTagType;
    registrationTo: string;
    registrationTarget: string;
    onSubmit: () => void;
    oAuth2Buttons: ReactNode;
    emailInputProps: Pick<TextInputPropsType, 'error'>;
    passwordInputProps: Pick<TextInputPropsType, 'error'>;
    errorEmail: string;
    errorPassword: string;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginAttributesType;

export type LoginPagePropsType = LoginPageEffectivePropsType &
    ComponentStylePropsType;

export type LoginPageRootPropsType = LoginPageEffectivePropsType &
    ComponentElementStylePropsType;

export type LoginPageContainerPropsType = Partial<{
    enableBackground: boolean;
}>;

export type LoginPageEmailInputPropsType = Partial<{
    label: string;
    wide: boolean;
    isError: boolean;
}> &
    Pick<LoginPageEffectivePropsType, 'emailInputProps'>;

export type LoginPagePasswordInputPropsType = Partial<{
    label: string;
    wide: boolean;
    isError: boolean;
    type: string;
}> &
    Pick<LoginPageEffectivePropsType, 'emailInputProps'>;
