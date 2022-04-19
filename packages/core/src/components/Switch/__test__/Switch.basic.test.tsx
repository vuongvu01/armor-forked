/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Switch } from '..';

describe('<Switch />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Switch />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Switch />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Switch', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Switch).toSupportRefForwarding();
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<Switch>Hello</Switch>).toSupportOverride('Switch');
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Switch).toSupportRestPropsForwarding('Switch');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Switch).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Switch).toSupportAttributeForwarding();
    });
});
