/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Stack } from '../Stack';
import { stackRoot } from '../constants';
import { StackItem } from '../StackItem';

describe('<Stack />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Stack label="Sample" />);
    });

    it.skip('should transfer properties into styles', async () => {
        const tree = renderer
            .create(
                <Stack justifyContent="space-between">
                    <StackItem>
                        <div>Item 1</div>
                    </StackItem>
                    <StackItem flexGrow={10}>
                        <div>Item 2</div>
                    </StackItem>
                    <StackItem>
                        <div>Item 3</div>
                    </StackItem>
                </Stack>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
    });

    it('should ensure class names set', async () => {
        const stackItemId = 'StackItem';

        render(
            <Stack>
                <StackItem>
                    <div>Item 1</div>
                </StackItem>
                <StackItem data-testid={stackItemId}>
                    <div>Item 2</div>
                </StackItem>
                <StackItem>
                    <div>Item 3</div>
                </StackItem>
            </Stack>,
        );

        const stackRootElement = screen.getByTestId(stackRoot);
        expect(stackRootElement).toHaveClass('Stack-Root');

        const stackItemElement = screen.getByTestId(stackItemId);
        expect(stackItemElement).toHaveClass('StackItem-Root');
    });
});
