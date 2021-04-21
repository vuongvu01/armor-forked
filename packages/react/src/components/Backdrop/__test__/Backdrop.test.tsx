/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Backdrop } from '../Backdrop';

describe('<Backdrop />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Backdrop display={true} />);
    });
});
