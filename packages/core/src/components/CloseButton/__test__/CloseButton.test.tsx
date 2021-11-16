/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { CloseButton } from '../CloseButton';

describe('<CloseButton />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<CloseButton />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<CloseButton />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('CloseButton', {
            Root: [],
        });
    });
});
