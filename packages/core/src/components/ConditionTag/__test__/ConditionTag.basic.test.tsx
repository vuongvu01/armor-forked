/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { ConditionTag } from '../index';

describe('<ConditionTag />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ConditionTag />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ConditionTag />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ConditionTag', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<ConditionTag ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ConditionTag).toSupportRestPropsForwarding('ConditionTag');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<ConditionTag>Hello</ConditionTag>).toSupportOverride(
            'ConditionTag',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ConditionTag).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(ConditionTag).toSupportAttributeForwarding();
    });
});
