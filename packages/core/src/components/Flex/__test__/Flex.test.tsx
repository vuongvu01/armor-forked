/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Flex } from '../Flex';
import { flexRoot } from '../constants';
import { FlexItem } from '../FlexItem';

describe('<Flex />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Flex />);
    });

    it('should transfer properties into styles', async () => {
        const tree = renderer
            .create(
                <Flex justifyContent="space-between">
                    <FlexItem>
                        <div>Item 1</div>
                    </FlexItem>
                    <FlexItem flexGrow={10}>
                        <div>Item 2</div>
                    </FlexItem>
                    <FlexItem>
                        <div>Item 3</div>
                    </FlexItem>
                </Flex>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
    });

    it('should ensure class names set', async () => {
        const flexItemId = 'SecondFlexItemRoot';

        render(
            <Flex>
                <FlexItem>
                    <div>Item 1</div>
                </FlexItem>
                <FlexItem data-testid={flexItemId}>
                    <div>Item 2</div>
                </FlexItem>
                <FlexItem>
                    <div>Item 3</div>
                </FlexItem>
            </Flex>,
        );

        const flexRootElement = screen.getByTestId(flexRoot);
        expect(flexRootElement).toHaveClass('Flex-Root');

        const flexItemElement = screen.getByTestId(flexItemId);
        expect(flexItemElement).toHaveClass('FlexItem-Root');
    });
});
