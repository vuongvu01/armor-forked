/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { customTheme } from './helpers';
import { TableFoot } from '..';
import { TableBody } from '../../TableBody';

describe('<TableFoot />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <TableFoot />
            </table>,
        );
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <table>
                <TableFoot />
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableFoot', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(
            <table>
                <TableFoot ref={result.current} />
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <table>
                <TableFoot>With custom theme</TableFoot>
            </table>,
            // @ts-ignore
        ).toSupportOverride('TableFoot', (tree) => tree.children[0]);
    });
});
