/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Typography } from '../..';

describe('<Typography />', () => {
    afterEach(async () => {
        await cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Typography />);
    });

    it('should contain correct CSS classes and properties', () => {
        const { container, rerender } = render(<Typography />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: [],
        });

        rerender(<Typography paragraph />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['paragraph'],
        });

        rerender(<Typography label />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['label'],
        });

        rerender(<Typography pageTitle />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['pageTitle'],
        });

        rerender(<Typography sectionTitle />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['sectionTitle'],
        });

        rerender(<Typography subSectionTitle />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['subSectionTitle'],
        });

        rerender(<Typography large />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['large'],
        });

        rerender(<Typography medium />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['medium'],
        });

        rerender(<Typography small />);
        // @ts-ignore
        expect(container).toHaveBEMStructure('Typography', {
            Root: ['small'],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Typography).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Typography).toSupportRestPropsForwarding('Typography');
    });

    it('should support component override', () => {
        expect(
            <Typography>With custom theme</Typography>,
            // @ts-ignore
        ).toSupportOverride('Typography');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Typography).toSupportMarginProps();
    });

    it('should support color properties', async () => {
        // @ts-ignore
        expect(Typography).toSupportColorProps();
    });
});
