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
        const { result } = renderHook(() => useRef(null));
        render(<FileCard ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });
});
