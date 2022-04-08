/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { DialogTitle } from '../../../index';

describe('<DialogTitle />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<DialogTitle />);
    });

    it('should contain correct CSS classes and properties', () => {
        const { container, rerender } = render(<DialogTitle />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('DialogTitle', {
            Root: [],
            Text: [],
        });

        rerender(<DialogTitle description="Foo" />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('DialogTitle', {
            Root: [],
            Text: [],
            Description: [],
        });
    });

    // todo: not supported, but should be
    // it('should support forwardRef', () => {
    //     // @ts-ignore
    //     expect(DialogTitle).toSupportRefForwarding();
    // });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DialogTitle).toSupportRestPropsForwarding('DialogTitle');
    });

    // todo: not supported, but should be
    // it('should support component override', () => {
    //     expect(
    //         <DialogTitle>With custom theme</DialogTitle>,
    //         // @ts-ignore
    //     ).toSupportOverride('DialogTitle');
    // });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(DialogTitle).toSupportPaddingProps();
    });
});
