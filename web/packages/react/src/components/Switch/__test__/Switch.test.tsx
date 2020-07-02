/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Switch } from '../Switch';

describe('<Switch />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Switch />);
    });
});
