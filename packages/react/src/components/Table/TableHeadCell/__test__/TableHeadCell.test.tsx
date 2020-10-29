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

describe('<TableHeadCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableHeadCell />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<TableHeadCell />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableHeadCell', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<TableHeadCell ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(<TableHeadCell>With custom theme</TableHeadCell>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <TableHeadCell>With custom theme</TableHeadCell>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it.skip('should support margin attributes', async () => {
        // @ts-ignore
        expect(TableHeadCell).toSupportMarginAttributes();
    });
});
