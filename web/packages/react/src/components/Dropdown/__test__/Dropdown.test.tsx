/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Dropdown } from '../Dropdown';

describe('<Dropdown />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Dropdown onSelect={() => {}} />);
    });
});
