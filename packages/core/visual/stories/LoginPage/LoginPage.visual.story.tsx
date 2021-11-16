/* eslint-disable no-console,import/no-unresolved */
import React from 'react';

import { LoginPage } from '../../../src';
import { DASLogo } from './DASLogo';

export default {
    title: 'LoginPage',
    component: LoginPage,
};

const dhURL = 'https://www.deliveryhero.com';

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
            enableRegistration
            errorEmail="Please specify a valid email"
            errorPassword="Please specify a valid password"
            oAuth2Buttons="Sign in button placeholder"
        />
    );
};
