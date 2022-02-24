/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { Link } from '../Link';

describe('<Link />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Link />);
    });

    it('should contain correct CSS classes and properties', () => {
        let result = render(<Link />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: [],
        });

        result = render(<Link medium />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['medium'],
        });

        result = render(<Link large />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['large'],
        });

        result = render(<Link underline />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['underline'],
        });

        result = render(<Link pressed />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['pressed'],
        });

        result = render(<Link disabled />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['disabled'],
        });
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Link />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Link ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Link).toSupportRestPropsForwarding('Link');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<Link>Hello</Link>).toSupportOverride('Link');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Link).toSupportMarginProps();
    });
});
