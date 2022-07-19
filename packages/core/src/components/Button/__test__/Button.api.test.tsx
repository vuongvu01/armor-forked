/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Button } from '../..';

describe('<Button />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render tag property', () => {
        const { getByText } = render(
            <Button tag="a" href="https://google.com">
                Link
            </Button>,
        );
        const element = getByText('Link');
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute('href', 'https://google.com');
    });

    it('should support onClick property', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button onClick={onClick} type="submit">
                Submit
            </Button>,
        );
        const element = getByText('Submit');
        userEvent.click(element!);
        expect(onClick).toHaveBeenCalled();
        expect(element).toHaveAttribute('type', 'submit');
    });

    it('should support disabled property', () => {
        const { getByText } = render(<Button disabled>Disabled</Button>);
        const element = getByText('Disabled');
        expect(element).toBeInstanceOf(HTMLButtonElement);
        expect(element).toBeDisabled();
    });

    it('should support disabled property when rendering anchor tag', () => {
        const handleClick = jest.fn();

        const { getByText } = render(
            <Button
                tag="a"
                href="https://google.de"
                onClick={handleClick}
                disabled
            >
                Disabled
            </Button>,
        );

        const element = getByText('Disabled');

        expect(element).toBeInstanceOf(HTMLAnchorElement);

        userEvent.click(element);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should support likeDisabled property', () => {
        const { getByText } = render(<Button likeDisabled>Disabled</Button>);
        const element = getByText('Disabled');
        expect(Array.from(element.classList)).toEqual(
            expect.arrayContaining(['Button-Root--disabled']),
        );
        expect(element).not.toBeDisabled();
    });
});
