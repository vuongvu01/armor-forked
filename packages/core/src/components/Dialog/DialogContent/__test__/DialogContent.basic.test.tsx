/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { DialogContent } from '../../../index';

describe('<DialogContent />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<DialogContent />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<DialogContent />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DialogContent', {
            Root: [],
        });
    });

    // todo: not supported, but should be
    // it('should support forwardRef', () => {
    //     // @ts-ignore
    //     expect(DialogContent).toSupportRefForwarding();
    // });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DialogContent).toSupportRestPropsForwarding('DialogContent');
    });

    it('should support component override', () => {
        expect(
            <DialogContent>With custom theme</DialogContent>,
            // @ts-ignore
        ).toSupportOverride('DialogContent');
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(DialogContent).toSupportPaddingProps();
    });
});
