/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { FlexItem } from '..';

describe('<FlexItem />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FlexItem />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FlexItem />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FlexItem', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(FlexItem).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportRestPropsForwarding('FlexItem');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportPaddingProps();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportWidthProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(FlexItem).toSupportAttributeForwarding();
    });
});
