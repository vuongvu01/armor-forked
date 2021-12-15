/* eslint-disable no-console,import/no-unresolved */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';

import { withWrapper } from '../../../helpers/Wrapper';
import { DASLogo } from './DASLogo';
import { LoginPage } from '../LoginPage';

export default {
    title: 'Components/LoginPage',
    component: LoginPage,
    decorators: [withWrapper],
    parameters: {},
};

const dhURL = 'https://www.deliveryhero.com';
const clientId =
    '91919637805-68hku6ccjs1iik004d3cjhnjv3uov6lm.apps.googleusercontent.com';

export const Default = () => {
    return (
        <LoginPage
            header="LOGO"
            title="Your product name"
            registrationHref={dhURL}
            registrationTarget="_blank"
            oAuth2Buttons="Sign in button placeholder"
        />
    );
};

export const WithForm = () => {
    return (
        <LoginPage
            enableLoginForm
            header="LOGO"
            title="Your product name"
            registrationHref={dhURL}
            registrationTarget="_blank"
            enableRegistration
            oAuth2Buttons="Sign in button placeholder"
        />
    );
};

export const WithProductLogo = () => {
    return (
        <LoginPage
            header={<DASLogo />}
            registrationHref={dhURL}
            registrationTarget="_blank"
            enableRegistration
            oAuth2Buttons="Sign in button placeholder"
        />
    );
};

export const WithErrors = () => {
    return (
        <LoginPage
            enableLoginForm
            header="LOGO"
            title="Your product name"
            registrationHref={dhURL}
            registrationTarget="_blank"
            oAuth2Buttons={
                <GoogleLogin
                    clientId={clientId}
                    onSuccess={(
                        response:
                            | GoogleLoginResponse
                            | GoogleLoginResponseOffline,
                    ) => console.log('SUCCESS', { response })}
                    onFailure={(
                        response:
                            | GoogleLoginResponse
                            | GoogleLoginResponseOffline,
                    ) => console.log('FAILURE', { response })}
                    redirectUri={dhURL}
                />
            }
            enableRegistration
            errorEmail="Please specify a valid email"
            errorPassword="Please specify a valid password"
        />
    );
};
