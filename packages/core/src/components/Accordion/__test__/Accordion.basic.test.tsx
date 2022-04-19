/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Accordion } from '..';

describe('<Accordion />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Accordion />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Accordion />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Accordion', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Accordion).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Accordion).toSupportRestPropsForwarding('Accordion');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Accordion).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Accordion).toSupportWidthProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Accordion).toSupportAttributeForwarding();
    });
});
