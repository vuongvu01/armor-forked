/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { TableHead } from '../..';

describe('<TableHead />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <TableHead />
            </table>,
        );
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <table>
                <TableHead />
            </table>,
        );

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableHead', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(
            <table>
                <TableHead ref={result.current} />
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <table>
                <TableHead>With custom theme</TableHead>
            </table>,
            // @ts-ignore
        ).toSupportOverride('TableHead', (tree) => tree.children[0]);
    });
});
