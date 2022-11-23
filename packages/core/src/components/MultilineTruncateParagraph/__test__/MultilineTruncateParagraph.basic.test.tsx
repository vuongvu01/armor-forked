/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { MultilineTruncateParagraph } from '..';

describe('<MultilineTruncateParagraph />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<MultilineTruncateParagraph />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<MultilineTruncateParagraph />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure(
            'MultilineTruncateParagraph',
            {
                Root: [],
            },
        );
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(MultilineTruncateParagraph).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(MultilineTruncateParagraph).toSupportRestPropsForwarding(
            'MultilineTruncateParagraph',
        );
    });

    it('should support component override', () => {
        expect(
            <MultilineTruncateParagraph>Hello</MultilineTruncateParagraph>,
            // @ts-ignore
        ).toSupportOverride('MultilineTruncateParagraph');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(MultilineTruncateParagraph).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(MultilineTruncateParagraph).toSupportAttributeForwarding();
    });
});
