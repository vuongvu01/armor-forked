/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { LoginPage } from '..';

describe('<LoginPage />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should return correct data when click submit with uncontrolled form', async () => {
        const mockSubmit = jest.fn();
        const { getByText, getAllByTestId } = render(
            <LoginPage enableLoginForm onSubmit={mockSubmit} />,
        );

        const [emailInput, passwordInput] = getAllByTestId('TextInputInput');
        const submitButton = getByText('Login');

        userEvent.type(emailInput, 'MY_EMAIL');
        userEvent.type(passwordInput, 'MY_PASSWORD');

        userEvent.click(submitButton);

        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith({
            email: 'MY_EMAIL',
            password: 'MY_PASSWORD',
        });
    });

    it('should return correct data when click submit with controlled form', async () => {
        const mockSubmit = jest.fn();

        const { getByText } = render(
            <LoginPage
                enableLoginForm
                onSubmit={mockSubmit}
                emailInputProps={{
                    value: 'INPUT_EMAIL',
                }}
                passwordInputProps={{
                    value: 'INPUT_PASSWORD',
                }}
            />,
        );

        const submitButton = getByText('Login');
        userEvent.click(submitButton);

        expect(mockSubmit).toHaveBeenCalledTimes(1);

        expect(mockSubmit).toHaveBeenCalledWith({
            email: 'INPUT_EMAIL',
            password: 'INPUT_PASSWORD',
        });
    });

    it('should trigger onChange handlers with controlled form', async () => {
        const mockOnChangeEmail = jest.fn();
        const mockOnChangePassword = jest.fn();

        const { getAllByTestId } = render(
            <LoginPage
                enableLoginForm
                emailInputProps={{
                    value: 'INPUT_EMAIL',
                    onChange: (e) => mockOnChangeEmail(e.target.value),
                }}
                passwordInputProps={{
                    value: 'INPUT_PASSWORD',
                    onChange: (e) => mockOnChangePassword(e.target.value),
                }}
            />,
        );

        const [emailInput, passwordInput] = getAllByTestId('TextInputInput');
        userEvent.type(emailInput, 'E');
        userEvent.type(passwordInput, 'P');

        expect(mockOnChangeEmail).toHaveBeenCalledTimes(1);
        expect(mockOnChangePassword).toHaveBeenCalledTimes(1);

        expect(mockOnChangeEmail).toHaveBeenCalledWith('INPUT_EMAILE');
        expect(mockOnChangePassword).toHaveBeenCalledWith('INPUT_PASSWORDP');
    });
});
