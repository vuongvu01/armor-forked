/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { customTheme } from './helpers';
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

    it('should contain correct CSS classes and attributes', () => {
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

    it('should support custom theme', () => {
        let tree = renderer
            .create(
                <table>
                    <TableHead>With custom theme</TableHead>
                </table>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <table>
                        <TableHead>With custom theme</TableHead>
                    </table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree.children[0]).toHaveStyleRule('border-width', '2px');
    });
});
