/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { Link } from '..';

describe('<Link />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Link />);
    });

    it('should contain correct CSS classes and attributes', () => {
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

        result = render(<Link inline />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: ['inline'],
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

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Link />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Link', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Link ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Link).toSupportRestPropsForwarding('Link');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<Link>Hello</Link>).toSupportCustomTheme('Link');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Link).toSupportMarginAttributes();
    });
});
