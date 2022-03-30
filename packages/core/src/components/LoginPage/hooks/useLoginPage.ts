import { ChangeEvent } from 'react';
import { useRootRef, useControlledState } from '@deliveryhero/armor-system';

import { LoginPageEffectivePropsType } from '../type';
import { RefType } from '../../../type';

export const useLoginPage = <E extends HTMLElement>(
    {
        header,
        title,
        enableLoginForm,
        greetingTitle = 'Welcome',
        greetingDescription = enableLoginForm
            ? 'Enter your email and password'
            : 'Sign in with your Google account',
        emailPlaceholder = 'Email',
        passwordPlaceholder = 'Password',
        emailInputProps,
        passwordInputProps,
        enableRegistration,
        registrationHref,
        registrationTag,
        registrationTo,
        registrationTarget,
        onSubmit,
        oAuth2Buttons,
        errorEmail,
        errorPassword,
        ...restProps
    }: LoginPageEffectivePropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);
    const isError = !!(errorEmail || errorPassword);

    const [internalEmail, setInternalEmail] = useControlledState(
        emailInputProps?.defaultValue,
        emailInputProps?.value,
    );

    const [internalPassword, setInternalPassword] = useControlledState(
        passwordInputProps?.defaultValue,
        passwordInputProps?.value,
    );

    const handleSubmit = () => {
        onSubmit?.({
            email: internalEmail as string,
            password: internalPassword as string,
        });
    };

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        emailInputProps?.onChange?.(event);
        setInternalEmail(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        passwordInputProps?.onChange?.(event);
        setInternalPassword(event.target.value);
    };

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        emailFieldProps: {
            label: emailPlaceholder,
            wide: true,
            ...emailInputProps,
            onChange: handleChangeEmail,
            isError,
        },
        emailFormFieldProps: {
            isError,
            wide: true,
        },
        passwordFieldProps: {
            label: passwordPlaceholder,
            wide: true,
            ...passwordInputProps,
            onChange: handleChangePassword,
            type: 'password',
            isError,
        },
        passwordFormFieldProps: {
            isError,
            wide: true,
            enableVerticalOuterSpacing: true,
        },
        loginButtonProps: {
            wide: true,
            onClick: handleSubmit,
            type: 'submit' as 'submit' | 'button' | 'reset' | undefined,
        },
        separatorTypographyProps: {
            marginX: 4,
        },
        registrationLinkProps: {
            paragraph: true,
            small: true,
            href: registrationHref,
            tag: registrationTag,
            to: registrationTo,
            target: registrationTarget,
        },
        header,
        title,
        greetingTitle,
        greetingDescription,
        enableRegistration,
        enableLoginForm,
        errorEmail,
        errorPassword,
        oAuth2Buttons,
    };
};
