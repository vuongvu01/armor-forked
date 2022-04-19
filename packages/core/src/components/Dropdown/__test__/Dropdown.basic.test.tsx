/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Dropdown } from '../..';

describe('<Dropdown /> Basic', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Dropdown />);
    });

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(Dropdown).toSupportRefForwarding();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Dropdown).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Dropdown).toSupportWidthProps();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Dropdown).toSupportRestPropsForwarding('Dropdown');
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(Dropdown).toSupportAttributeForwarding();
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<Dropdown />).toSupportOverride('Dropdown');
    });
});
