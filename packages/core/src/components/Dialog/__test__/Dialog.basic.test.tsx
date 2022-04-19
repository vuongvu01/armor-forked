/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';

import { Dialog } from '../..';

describe('<Dialog />', () => {
    beforeAll(() => {
        // disabling the portaling for good
        // @ts-ignore
        ReactDOM.createPortal = jest.fn((element) => element);
    });

    afterEach(async () => {
        await cleanup();
        // @ts-ignore
        ReactDOM.createPortal.mockClear();
    });

    it('should render itself without errors', async () => {
        render(<Dialog />);
    });

    it('should contain correct CSS classes and properties', () => {
        const { container } = render(<Dialog enablePortal={false} />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Dialog', {
            Root: ['closed'],
            Backdrop: [],
            AlignmentContainer: [],
            Window: [],
            CloseButton: [],
            Content: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Dialog).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Dialog).toSupportRestPropsForwarding('Dialog');
    });

    it('should support component override', () => {
        expect(
            <Dialog>With custom theme</Dialog>,
            // @ts-ignore
        ).toSupportOverride('Dialog');
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(<Dialog />).toSupportWidthPropsAlt({
            className: 'Dialog-Window',
        });
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(<Dialog />).toSupportHeightPropsAlt({
            className: 'Dialog-Window',
        });
    });
});
