/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Flex } from '..';

describe('<Flex />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Flex />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Flex />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Flex', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Flex).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Flex).toSupportRestPropsForwarding('Flex');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Flex).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Flex).toSupportWidthProps();
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(Flex).toSupportHeightProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Flex).toSupportAttributeForwarding();
    });
});
