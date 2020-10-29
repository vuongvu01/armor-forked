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

    it.skip('should support padding attributes', async () => {
        // @ts-ignore
        expect(PackItem).toSupportPaddingAttributes();
    });
});
