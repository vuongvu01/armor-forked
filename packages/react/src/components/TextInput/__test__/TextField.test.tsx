/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { TextInput } from '../..';

describe('<TextInput />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<TextInput />);
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(TextInput).toSupportMarginAttributes();
    });

    it('should support width attributes', async () => {
        // @ts-ignore
        expect(TextInput).toSupportWidthAttributes();
    });
});
