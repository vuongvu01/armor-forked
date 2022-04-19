/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { Message } from '..';

describe('<Message />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Message />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Message />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Message', {
            Root: [],
            Central: [],
            Icon: [],
            Content: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Message).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Message).toSupportRestPropsForwarding('Message');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<Message>Hello</Message>).toSupportOverride('Message');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Message).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Message).toSupportWidthProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(Message).toSupportAttributeForwarding();
    });
});
