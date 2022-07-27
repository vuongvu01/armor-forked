/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import {
    cleanup,
    render,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { <%- component_name_pascal %> } from '..';

describe('<<%- component_name_pascal %> />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render', async () => {
        const { container, getByText } = render(<<%- component_name_pascal %> />);
    });
});
