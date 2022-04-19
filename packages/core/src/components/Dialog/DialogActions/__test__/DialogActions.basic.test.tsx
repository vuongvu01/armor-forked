/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { DialogActions } from '../../../index';

describe('<DialogActions />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<DialogActions />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<DialogActions />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DialogActions', {
            Root: [],
        });
    });

    // todo: not supported, but should be
    // it('should support forwardRef', () => {
    //     // @ts-ignore
    //     expect(DialogActions).toSupportRefForwarding();
    // });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DialogActions).toSupportRestPropsForwarding('DialogActions');
    });

    // todo: not supported, but should be
    // it('should support component override', () => {
    //     expect(
    //         <DialogActions>With custom theme</DialogActions>,
    //         // @ts-ignore
    //     ).toSupportOverride('DialogActions');
    // });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(DialogActions).toSupportPaddingProps();
    });
});
