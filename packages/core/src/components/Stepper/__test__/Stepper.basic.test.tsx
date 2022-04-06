/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { Stepper } from '..';

describe('<Stepper />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Stepper />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Stepper />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Stepper', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Stepper).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Stepper).toSupportRestPropsForwarding('Stepper');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Stepper).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Stepper).toSupportAttributeForwarding();
    });
});
