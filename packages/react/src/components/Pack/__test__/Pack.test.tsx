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
        render(<Pack label="Sample" />);
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
        const packItemId = 'PackItem';

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

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginX';
        const marginValue = 13;

        const result = renderer
            .create(<Pack {...{ [marginAttribute]: marginValue }} />)
            .toJSON();

        // @ts-ignore
        expect(result).toSupportMarginAttribute(
            packRoot,
            marginAttribute,
            marginValue,
        );
    });
});
