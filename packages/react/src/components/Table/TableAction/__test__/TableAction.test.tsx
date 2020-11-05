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
import { TableAction } from '..';

describe('<TableAction />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<TableAction />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<TableAction />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('TableAction', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<TableAction ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        let tree = renderer
            .create(<TableAction>With custom theme</TableAction>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <TableAction>With custom theme</TableAction>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(TableAction).toSupportMarginAttributes();
    });
});
