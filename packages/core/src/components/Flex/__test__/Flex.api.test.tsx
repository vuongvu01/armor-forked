/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Flex } from '../Flex';
import { flexRoot } from '../constants';
import { FlexItem } from '../FlexItem';
import {
    JustifyContentType,
    AlignContentType,
    AlignItemsType,
    DirectionType,
} from '../type';

const justifyContentList: JustifyContentType[] = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'start',
    'end',
    'left',
    'right',
];

const alignContentList: AlignContentType[] = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'start',
    'end',
    'stretch',
    'baseline',
    'first baseline',
    'last baseline',
];

const alignItemsList: AlignItemsType[] = [
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'first baseline',
    'last baseline',
    'start',
    'end',
    'self-start',
    'self-end',
];

const directionList: DirectionType[] = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
];

describe('<Flex />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it.each(justifyContentList)(
        'should transfer justifyContent properties "%s" into styles',
        async (justifyContent) => {
            const tree = renderer
                .create(
                    <Flex justifyContent={justifyContent}>
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

            expect(tree).toHaveStyleRule('justify-content', justifyContent);
        },
    );

    it.each(alignContentList)(
        'should transfer alignContent properties "%s" into styles',
        async (alignContent) => {
            const tree = renderer
                .create(
                    <Flex alignContent={alignContent}>
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

            expect(tree).toHaveStyleRule('align-content', alignContent);
        },
    );

    it.each(alignItemsList)(
        'should transfer alignItems properties "%s" into styles',
        async (alignItems) => {
            const tree = renderer
                .create(
                    <Flex alignItems={alignItems}>
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

            expect(tree).toHaveStyleRule('align-items', alignItems);
        },
    );

    it.each(directionList)(
        'should transfer direction properties "%s" into styles',
        async (direction) => {
            const tree = renderer
                .create(
                    <Flex direction={direction}>
                        <FlexItem>
                            <div>Item 1</div>
                        </FlexItem>
                        <FlexItem>
                            <div>Item 2</div>
                        </FlexItem>
                        <FlexItem>
                            <div>Item 3</div>
                        </FlexItem>
                    </Flex>,
                )
                .toJSON();

            expect(tree).toHaveStyleRule('flex-direction', direction);
        },
    );

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
