/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FileCard } from '..';

describe('<FileCard />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FileCard />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FileCard', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(FileCard).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore

        expect(FileCard).toSupportRestPropsForwarding('FileCard');
    });

    it('should support component override', () => {
        // @ts-ignore

        expect(<FileCard>Hello</FileCard>).toSupportOverride('FileCard');
    });

    it('should support margin properties', async () => {
        // @ts-ignore

        expect(FileCard).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore

        expect(FileCard).toSupportAttributeForwarding();
    });
});
