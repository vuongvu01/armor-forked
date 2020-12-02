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
import { TableControllerCell } from '..';

describe('<TableControllerCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableControllerCell />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<TableControllerCell />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableControllerCell', {
            Root: [],
            Container: [],
            Controller: [],
            Icon: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<TableControllerCell ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(TableControllerCell).toSupportRestPropsForwarding(
            'TableControllerCell',
            // @ts-ignore
            children => (
                <table>
                    <tbody>
                        <tr>{children}</tr>
                    </tbody>
                </table>
            ),
        );
    });

    it('should support custom theme', () => {
        let tree = renderer
            .create(
                <TableControllerCell>With custom theme</TableControllerCell>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <TableControllerCell>With custom theme</TableControllerCell>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support padding attributes', async () => {
        // @ts-ignore
        expect(TableControllerCell).toSupportPaddingAttributes();
    });
});
