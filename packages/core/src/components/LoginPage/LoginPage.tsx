import React, { forwardRef } from 'react';

import { useLoginPageClassNames } from './hooks/useLoginPageClassNames';
import { useLoginPage } from './hooks/useLoginPage';
import {
    LoginPageContainer,
    LoginPageFormContainer,
    LoginPageGreetingContainer,
    LoginPageGreetingDescription,
    LoginPageGreetingTitle,
    LoginPageHeader,
    LoginPageRoot,
    LoginPageTitle,
    LoginPageWrapper,
    OAuth2SignInContainer,
    RegistrationOfferContainer,
    RegistrationOfferLink,
    RegistrationOfferSupportiveText,
    SeparatorContainer,
    SeparatorDivider,
} from './style';
import { FormField, FormFieldMessage } from '../FormField';
import { Typography } from '../Typography';
import { LoginPagePropsType } from './type';
import { LOGINPAGE_CLASS_PREFIX } from './constants';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

/**
 * # LoginPage
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/3419ad-login-page/b/221ef2)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { LoginPage } from '@deliveryhero/armor';
 *
 * const handleClickSubmit = (data: { email: string; password: string }) => {
 *   const { email, password } = data;
 *   console.log({ email, password });
 * };
 *
 * <LoginPage
 *     enableLoginForm
 *     header="LOGO"
 *     title="Your product name"
 *     registrationHref="https://www.deliveryhero.com"
 *     registrationTarget="_blank"
 *     enableRegistration
 *     oAuth2Buttons="Sign in button placeholder"
 *     onSubmit={handleClickSubmit}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const LoginPage = forwardRef<HTMLDivElement, LoginPagePropsType>(
    function LoginPage({ className, ...props }, ref) {
        const classNames = useLoginPageClassNames(
            LOGINPAGE_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            emailFieldProps,
            emailFormFieldProps,
            passwordFieldProps,
            passwordFormFieldProps,
            loginButtonProps,
            separatorTypographyProps,
            registrationLinkProps,
            header,
            title,
            greetingTitle,
            greetingDescription,
            enableRegistration,
            enableLoginForm,
            errorEmail,
            errorPassword,
            oAuth2Buttons,
        } = useLoginPage(props, ref);

        return (
            <LoginPageRoot {...rootProps} className={classNames.Root}>
                <LoginPageWrapper className={classNames.Wrapper}>
                    <LoginPageContainer className={classNames.Container}>
                        {!!header && (
                            <LoginPageHeader className={classNames.Header}>
                                {header}
                            </LoginPageHeader>
                        )}
                        {!!title && (
                            <LoginPageTitle className={classNames.Title}>
                                {title}
                            </LoginPageTitle>
                        )}
                        <LoginPageGreetingContainer
                            className={classNames.GreetingContainer}
                        >
                            <LoginPageGreetingTitle
                                className={classNames.GreetingTitle}
                            >
                                {greetingTitle}
                            </LoginPageGreetingTitle>
                            <LoginPageGreetingDescription
                                className={classNames.GreetingDescription}
                            >
                                {greetingDescription}
                            </LoginPageGreetingDescription>
                        </LoginPageGreetingContainer>
                        {!!enableLoginForm && (
                            <>
                                <LoginPageFormContainer
                                    className={classNames.FormContainer}
                                >
                                    <FormField
                                        className={classNames.EmailFormField}
                                        marginTop={4}
                                        marginBottom={2}
                                        {...emailFormFieldProps}
                                    >
                                        <TextInput
                                            className={classNames.EmailField}
                                            {...emailFieldProps}
                                        />
                                        {!!errorEmail && (
                                            <FormFieldMessage
                                                className={
                                                    classNames.FormFieldMessage
                                                }
                                                error
                                            >
                                                {errorEmail}
                                            </FormFieldMessage>
                                        )}
                                    </FormField>
                                    <FormField
                                        marginTop={2}
                                        marginBottom={4}
                                        className={classNames.PasswordFormField}
                                        {...passwordFormFieldProps}
                                    >
                                        <TextInput
                                            marginBottom={0.75}
                                            className={classNames.PasswordField}
                                            {...passwordFieldProps}
                                        />
                                        {!!errorPassword && (
                                            <FormFieldMessage
                                                className={
                                                    classNames.FormFieldMessage
                                                }
                                                error
                                            >
                                                {errorPassword}
                                            </FormFieldMessage>
                                        )}
                                    </FormField>
                                    <Button
                                        className={classNames.Button}
                                        marginTop={2}
                                        {...loginButtonProps}
                                    >
                                        Login
                                    </Button>
                                </LoginPageFormContainer>
                                <SeparatorContainer
                                    className={classNames.SeparatorContainer}
                                >
                                    <SeparatorDivider
                                        className={classNames.Divider}
                                    />
                                    <Typography
                                        className={
                                            classNames.SeparatorTypography
                                        }
                                        {...separatorTypographyProps}
                                    >
                                        or
                                    </Typography>
                                    <SeparatorDivider
                                        className={classNames.Divider}
                                    />
                                </SeparatorContainer>
                            </>
                        )}
                        <OAuth2SignInContainer
                            className={classNames.SignInContainer}
                        >
                            {oAuth2Buttons}
                        </OAuth2SignInContainer>
                        {!!enableRegistration && (
                            <RegistrationOfferContainer
                                className={classNames.OfferContainer}
                            >
                                <RegistrationOfferSupportiveText
                                    className={classNames.OfferSupportiveText}
                                >
                                    Don&apos;t have an account?
                                </RegistrationOfferSupportiveText>
                                <RegistrationOfferLink
                                    className={classNames.OfferLink}
                                    {...registrationLinkProps}
                                >
                                    Register now
                                </RegistrationOfferLink>
                            </RegistrationOfferContainer>
                        )}
                    </LoginPageContainer>
                </LoginPageWrapper>
            </LoginPageRoot>
        );
    },
);

LoginPage.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
LoginPage.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
