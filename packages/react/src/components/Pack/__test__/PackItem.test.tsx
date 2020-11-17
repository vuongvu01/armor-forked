/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { PackItem } from '../PackItem';

describe('<Pack />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<PackItem />);
    });

    it('should support padding attributes', async () => {
        // @ts-ignore
        expect(PackItem).toSupportPaddingAttributes();
    });

    it('should support width attributes', async () => {
        // @ts-ignore
        expect(PackItem).toSupportWidthAttributes();
    });
});
