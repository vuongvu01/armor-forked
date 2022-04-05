/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Box } from '../..';

describe('<Box />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Box />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Box />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Box', {
            Root: [],
        });
    });

    // todo: currently ref is not forwarded, but should be
    // it('should support forwardRef', () => {
    //     // @ts-ignore
    //     expect(Box).toSupportRefForwarding();
    // });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Box).toSupportRestPropsForwarding('Box');
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Box).toSupportWidthProps();
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(Box).toSupportHeightProps();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Box).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(Box).toSupportPaddingProps();
    });

    it('should support color properties', async () => {
        // @ts-ignore
        expect(Box).toSupportColorProps();
    });

    it('should support display properties', async () => {
        // @ts-ignore
        expect(Box).toSupportDisplayProps();
    });

    it('should support text alignment properties', async () => {
        // @ts-ignore
        expect(Box).toSupportTextAlignmentProps();
    });
});
