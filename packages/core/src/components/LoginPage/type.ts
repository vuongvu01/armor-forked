import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { LinkTagType } from '../Link/type';
import { TextInputPropsType } from '../TextInput/type';

/** 👉 PROPS TYPE */
export type LoginPageEffectivePropsType = Partial<{
    /** The top-most header of the login form */
    header: ReactNode;
    /** The title of the form */
    title: ReactNode;
    /** A greeting title that is usually used for the welcome text */
    greetingTitle: string;
    /** Secondary greeting description */
    greetingDescription: string;
    /** A placeholder text for the email input element */
    emailPlaceholder: string;
    /** A placeholder text for the password input element */
    passwordPlaceholder: string;
    /** When enabled - allows users to register an account */
    enableRegistration: boolean;
    /** When enabled - allows users to supply credentials different from Google's SSO */
    enableLoginForm: boolean;
    /** An href to be followed when a user clicks on the 'Register' option */
    registrationHref: string;
    /** The type of the 'Register' option link */
    registrationTag: LinkTagType;
    /** A custom string representation of the link location to be followed when a user clicks on the 'Register' option */
    registrationTo: string;
    /** Tells the browser where the linked document should be loaded (e.g., _self, _target, etc.) */
    registrationTarget: string;
    /** Defines the action that should be performed when the Login button is clicked */
    onSubmit: () => void;
    /** A node dedicated to custom SSO Option definition (e.g., one could use it to supply a GoogleLogin-type of button) */
    oAuth2Buttons: ReactNode;
    /** Set of custom props that should be passed through to the email input text input field */
    emailInputProps: Pick<TextInputPropsType, 'error'>;
    /** Set of custom props that should be passed through to the password input text input field */
    passwordInputProps: Pick<TextInputPropsType, 'error'>;
    /** Error message that should be displayed below the email input field */
    errorEmail: string;
    /** Error message that should be displayed below the password input field */
    errorPassword: string;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType;

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
