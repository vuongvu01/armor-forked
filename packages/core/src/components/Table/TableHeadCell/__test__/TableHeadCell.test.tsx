/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { customTheme } from './helpers';
import { TableHeadCell } from '..';
import { TableCell } from '../../TableCell';

describe('<TableHeadCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableHeadCell />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<TableHeadCell />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableHeadCell', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<TableHeadCell ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <table>
                <thead>
                    <tr>
                        <TableHeadCell>With custom theme</TableHeadCell>
                    </tr>
                </thead>
            </table>,
            // @ts-ignore
        ).toSupportOverride(
            'TableHeadCell',
            // @ts-ignore
            (tree) => tree.children[0].children[0].children[0],
        );
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(TableHeadCell).toSupportPaddingProps();
    });
});
