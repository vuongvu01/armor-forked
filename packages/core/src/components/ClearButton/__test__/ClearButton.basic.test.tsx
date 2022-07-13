/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { render } from '@testing-library/react';

import { ClearButton } from '..';

describe('<ClearButton />', () => {
    it('should render itself without errors', async () => {
        render(<ClearButton />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ClearButton />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ClearButton', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(ClearButton).toSupportRefForwarding();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ClearButton).toSupportRestPropsForwarding('ClearButton');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<ClearButton />).toSupportOverride('ClearButton');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ClearButton).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(ClearButton).toSupportAttributeForwarding();
    });
});
