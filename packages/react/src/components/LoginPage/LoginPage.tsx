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
import { useComponentTheme } from '../../utils/hooks';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

/**
 * @armor-docs-component
 */
export const LoginPage = forwardRef<HTMLDivElement, LoginPagePropsType>(
    function LoginPage({ className, ...props }, ref) {
        const theme = useComponentTheme(LOGINPAGE_CLASS_PREFIX);
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
            <LoginPageRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <LoginPageWrapper className={classNames.Wrapper} theme={theme}>
                    <LoginPageContainer
                        className={classNames.Container}
                        theme={theme}
                    >
                        {!!header && (
                            <LoginPageHeader
                                className={classNames.Header}
                                theme={theme}
                            >
                                {header}
                            </LoginPageHeader>
                        )}
                        {!!title && (
                            <LoginPageTitle
                                className={classNames.Title}
                                theme={theme}
                            >
                                {title}
                            </LoginPageTitle>
                        )}
                        <LoginPageGreetingContainer
                            className={classNames.GreetingContainer}
                            theme={theme}
                        >
                            <LoginPageGreetingTitle
                                className={classNames.GreetingTitle}
                                theme={theme}
                            >
                                {greetingTitle}
                            </LoginPageGreetingTitle>
                            <LoginPageGreetingDescription
                                className={classNames.GreetingDescription}
                                theme={theme}
                            >
                                {greetingDescription}
                            </LoginPageGreetingDescription>
                        </LoginPageGreetingContainer>
                        {!!enableLoginForm && (
                            <>
                                <LoginPageFormContainer
                                    className={classNames.FormContainer}
                                    theme={theme}
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
                                        theme={theme}
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
                                        theme={theme}
                                        className={classNames.Divider}
                                    />
                                </SeparatorContainer>
                            </>
                        )}
                        <OAuth2SignInContainer
                            theme={theme}
                            className={classNames.SignInContainer}
                        >
                            {oAuth2Buttons}
                        </OAuth2SignInContainer>
                        {!!enableRegistration && (
                            <RegistrationOfferContainer
                                theme={theme}
                                className={classNames.OfferContainer}
                            >
                                <RegistrationOfferSupportiveText
                                    theme={theme}
                                    className={classNames.OfferSupportiveText}
                                >
                                    Don&apos;t have an account?
                                </RegistrationOfferSupportiveText>
                                <RegistrationOfferLink
                                    theme={theme}
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
