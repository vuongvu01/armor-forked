/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { ActionSheet } from '..';

describe('<ActionSheet />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ActionSheet />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ActionSheet />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ActionSheet', {
            Root: [],
            LabelContainer: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(ActionSheet).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportRestPropsForwarding('ActionSheet');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<ActionSheet>Hello</ActionSheet>).toSupportOverride(
            'ActionSheet',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportWidthProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(ActionSheet).toSupportAttributeForwarding();
    });
});
