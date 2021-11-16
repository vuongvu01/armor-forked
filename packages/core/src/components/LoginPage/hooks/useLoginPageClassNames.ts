import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useLoginPageClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Wrapper: makeBEM(classPrefix, 'Wrapper'),
            Container: makeBEM(classPrefix, 'Container'),
            Header: makeBEM(classPrefix, 'Header'),
            Title: makeBEM(classPrefix, 'Title'),
            GreetingContainer: makeBEM(classPrefix, 'GreetingContainer'),
            GreetingTitle: makeBEM(classPrefix, 'GreetingTitle'),
            GreetingDescription: makeBEM(classPrefix, 'GreetingDescription'),
            FormContainer: makeBEM(classPrefix, 'FormContainer'),
            EmailField: makeBEM(classPrefix, 'EmailField'),
            EmailFormField: makeBEM(classPrefix, 'EmailFormField'),
            FormFieldMessage: makeBEM(classPrefix, 'FormFieldMessage'),
            PasswordFormField: makeBEM(classPrefix, 'PasswordFormField'),
            SeparatorContainer: makeBEM(classPrefix, 'SeparatorContainer'),
            SeparatorTypography: makeBEM(classPrefix, 'SeparatorTypography'),
            PasswordField: makeBEM(classPrefix, 'PasswordField'),
            Button: makeBEM(classPrefix, 'Button'),
            Divider: makeBEM(classPrefix, 'Divider'),
            OfferContainer: makeBEM(classPrefix, 'OfferContainer'),
            OfferSupportiveText: makeBEM(classPrefix, 'OfferSupportiveText'),
            OfferLink: makeBEM(classPrefix, 'OfferLink'),
            SignInContainer: makeBEM(classPrefix, 'SignInContainer'),
        };
    }, [classPrefix, className]);
