/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Pack } from '../Pack';
import { packRoot } from '../constants';
import { PackItem } from '../PackItem';

describe('<Pack />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Pack />);
    });

    it('should transfer properties into styles', async () => {
        const tree = renderer
            .create(
                <Pack justifyContent="space-between">
                    <PackItem>
                        <div>Item 1</div>
                    </PackItem>
                    <PackItem flexGrow={10}>
                        <div>Item 2</div>
                    </PackItem>
                    <PackItem>
                        <div>Item 3</div>
                    </PackItem>
                </Pack>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
    });

    it('should ensure class names set', async () => {
        const packItemId = 'SecondPackItemRoot';

        render(
            <Pack>
                <PackItem>
                    <div>Item 1</div>
                </PackItem>
                <PackItem data-testid={packItemId}>
                    <div>Item 2</div>
                </PackItem>
                <PackItem>
                    <div>Item 3</div>
                </PackItem>
            </Pack>,
        );

        const packRootElement = screen.getByTestId(packRoot);
        expect(packRootElement).toHaveClass('Pack-Root');

        const packItemElement = screen.getByTestId(packItemId);
        expect(packItemElement).toHaveClass('PackItem-Root');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Pack).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Pack).toSupportWidthProps();
    });

    it('should support height properties', async () => {
        // @ts-ignore
        expect(Pack).toSupportHeightProps();
    });
});
