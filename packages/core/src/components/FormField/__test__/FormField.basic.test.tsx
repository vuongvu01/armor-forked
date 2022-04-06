/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { FormField } from '../..';

describe('<FormField />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<FormField />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FormField />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FormField', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(FormField).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FormField).toSupportRestPropsForwarding('FormField');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<FormField>Hello</FormField>).toSupportOverride('FormField');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FormField).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(FormField).toSupportWidthProps();
    });
});
