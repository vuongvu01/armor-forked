/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import {
    // fireEvent,
    cleanup,
    render,
    // prettyDOM,
    // wait,
    // waitForElement,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { customTheme } from './helpers';
import { EditableTableCell } from '../EditableTableCell';

describe('<EditableTableCell />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it.skip('should render itself without errors', async () => {
        render(<EditableTableCell />);
    });

    // it('should contain correct CSS classes and properties', () => {
    //     const result = render(<EditableTableCell />);
    //     // @ts-ignore
    //     expect(result.container).toHaveBEMStructure('EditableTableCell', {
    //         Root: [],
    //     });
    // });
    //
    // it('should support forwardRef', () => {
    //     const { result } = renderHook(() => useRef());
    //     render(<EditableTableCell ref={result.current} />);
    //
    //     expect(result.current.current).toBeInstanceOf(HTMLElement);
    // });
    //
    // it('should support custom theme', () => {
    //     let tree = renderer
    //         .create(<EditableTableCell>With custom theme</EditableTableCell>)
    //         .toJSON();
    //
    //     // @ts-ignore
    //     expect(tree).not.toHaveStyleRule('border-width', '2px');
    //
    //     tree = renderer
    //         .create(
    //             <ThemeProvider theme={customTheme}>
    //                 <EditableTableCell>With custom theme</EditableTableCell>
    //             </ThemeProvider>,
    //         )
    //         .toJSON();
    //
    //     // @ts-ignore
    //     expect(tree).toHaveStyleRule('border-width', '2px');
    // });
});
