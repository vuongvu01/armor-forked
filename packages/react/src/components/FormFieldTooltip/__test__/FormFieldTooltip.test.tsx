/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { FormFieldTooltip } from '../..';

describe('<FormFieldTooltip />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<FormFieldTooltip />);
    });
});
