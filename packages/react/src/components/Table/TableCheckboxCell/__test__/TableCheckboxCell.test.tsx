/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { TableCheckboxCell } from '..';

describe('<TableCheckboxCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCheckboxCell />
                    </tr>
                </tbody>
            </table>,
        );
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(
            <table>
                <tbody>
                    <tr>
                        <TableCheckboxCell />
                    </tr>
                </tbody>
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableCheckboxCell', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCheckboxCell ref={result.current} />
                    </tr>
                </tbody>
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });
});
