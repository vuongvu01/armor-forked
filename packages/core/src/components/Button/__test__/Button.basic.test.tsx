/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Button } from '../..';

describe('<Button />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Button />);
    });

    it('should contain correct CSS classes and properties', () => {
        let result = render(<Button />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary'],
        });

        result = render(<Button primary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary'],
        });

        result = render(<Button secondary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['secondary'],
        });

        result = render(<Button tertiary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['tertiary'],
        });

        result = render(<Button primary danger wide small />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary', 'danger', 'wide', 'small'],
        });

        result = render(<Button disabled />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary', 'disabled'],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Button).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Button).toSupportRestPropsForwarding('Button');
    });

    it('should support component override', () => {
        expect(
            <Button>With custom theme</Button>,
            // @ts-ignore
        ).toSupportOverride('Button');
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Button).toSupportWidthProps();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Button).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(Button).toSupportPaddingProps();
    });
});
