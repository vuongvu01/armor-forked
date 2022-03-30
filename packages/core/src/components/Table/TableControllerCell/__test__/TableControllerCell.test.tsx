/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { TableControllerCell } from '..';

describe('<TableControllerCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableControllerCell />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<TableControllerCell />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableControllerCell', {
            Root: [],
            Container: [],
            Trigger: [],
            Icon: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<TableControllerCell ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(TableControllerCell).toSupportRestPropsForwarding(
            'TableControllerCell',
            // @ts-ignore
            (children) => (
                <table>
                    <tbody>
                        <tr>{children}</tr>
                    </tbody>
                </table>
            ),
        );
    });

    it('should support component override', () => {
        expect(
            <TableControllerCell>With custom theme</TableControllerCell>,
            // @ts-ignore
        ).toSupportOverride('TableControllerCell');
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(TableControllerCell).toSupportPaddingProps();
    });
});
