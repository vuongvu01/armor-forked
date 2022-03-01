/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Spinner } from '../components';

describe('<Spinner />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('renders itself without any errors !', async () => {
        render(<Spinner />);
    });

    it('ensures that a className corresponding to the Spinner name is set', async () => {
        const { container: SpinnerContainer } = render(<Spinner />);
        const spinner = SpinnerContainer.querySelector('.Spinner');

        expect(spinner).not.toBeNull();
        expect(spinner).toBeInstanceOf(HTMLDivElement);
    });

    it('allows to extend className with a custom value', async () => {
        const { container } = render(<Spinner className="ExtraClass" />);
        const spinner = container.querySelector('.Spinner.ExtraClass');

        expect(spinner).not.toBeNull();
    });
});
