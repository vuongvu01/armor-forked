/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { TableAction } from '..';

describe('<TableAction />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableAction />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<TableAction />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableAction', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<TableAction ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <TableAction>With custom theme</TableAction>,
            // @ts-ignore
        ).toSupportOverride('TableAction');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(TableAction).toSupportMarginProps();
    });
});
