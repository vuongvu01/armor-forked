/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { DialogTitle } from '../../../index';

describe('<DialogTitle />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should support description property', () => {
        const { container, rerender, getByText } = render(<DialogTitle />);
        expect(
            container.querySelector('.DialogTitle-Description'),
        ).not.toBeInTheDocument();

        rerender(<DialogTitle description="Foo" />);
        expect(getByText('Foo')).toBeInTheDocument();
    });
});
