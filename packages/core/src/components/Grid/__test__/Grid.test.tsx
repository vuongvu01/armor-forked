/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Grid } from '../Grid';

describe('<Grid />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Grid />);
    });

    // it('should ensure class names set', async () => {
    //     const gridItemId = 'GridItem';
    //
    //     render(<Grid />);
    //
    //     const gridRootElement = screen.getByTestId(gridRoot);
    //     expect(gridRootElement).toHaveClass('Grid-Root');
    //
    //     const gridItemElement = screen.getByTestId(gridItemId);
    //     expect(gridItemElement).toHaveClass('GridItem-Root');
    // });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(Grid).toSupportHeightAttributes();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Grid).toSupportWidthAttributes();
    });
});
