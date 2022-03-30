/* eslint-disable import/no-extraneous-dependencies */

import React, { ReactChildren, useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { TableRow } from '..';

describe('<TableRow />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <table>
                <tbody>
                    <TableRow />
                </tbody>
            </table>,
        );
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <table>
                <tbody>
                    <TableRow />
                </tbody>
            </table>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableRow', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(
            <table>
                <tbody>
                    <TableRow ref={result.current} />
                </tbody>
            </table>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component override', () => {
        expect(
            <table>
                <tbody>
                    <TableRow>
                        <td>With custom theme</td>
                    </TableRow>
                </tbody>
            </table>,
            // @ts-ignore
        ).toSupportOverride('TableRow', (tree) => tree.children[0].children[0]);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(TableRow).toSupportRestPropsForwarding(
            'TableRow',
            (children: ReactChildren) => (
                <table>
                    <tbody>{children}</tbody>
                </table>
            ),
        );
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(TableRow).toSupportHeightProps(
            'TableRowRoot',
            (children: ReactChildren) => (
                <table>
                    <tbody>{children}</tbody>
                </table>
            ),
        );
    });
});
