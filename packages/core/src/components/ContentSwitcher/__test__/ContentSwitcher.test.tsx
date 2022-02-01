/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { ContentSwitcher, ContentSwitcherControl } from '..';
import { Typography } from '../../Typography';
import {
    ContentSwitcherRootTestId,
    CONTENTSWITCHER_CLASS_PREFIX,
} from '../constants';
import { ContentSwitcherControlRootTestId } from '../ContentSwitcherControl/constants';

describe('<ContentSwitcher />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(
            <ContentSwitcher onSwitchNameChange={() => {}}>
                <ContentSwitcherControl switchName="A">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="B">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="C">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>,
        );

        expect(
            screen.getByTestId(ContentSwitcherRootTestId),
        ).toBeInTheDocument();
    });

    it('should render with 3 ContentSwitcherControl children', async () => {
        render(
            <ContentSwitcher onSwitchNameChange={() => {}}>
                <ContentSwitcherControl switchName="A">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="B">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="C">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>,
        );
        const ContentSwitcherRoot = screen.getByTestId(
            ContentSwitcherRootTestId,
        );
        expect(ContentSwitcherRoot.hasChildNodes()).toBeTruthy();
        expect(ContentSwitcherRoot.childNodes.length).toBe(3);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <ContentSwitcher onSwitchNameChange={() => {}}>
                <ContentSwitcherControl switchName="A">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="B">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="C">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure(
            CONTENTSWITCHER_CLASS_PREFIX,
            {
                Root: [],
            },
        );
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<ContentSwitcher ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ContentSwitcher).toSupportRestPropsForwarding('ContentSwitcher');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(ContentSwitcher).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(ContentSwitcher).toSupportAttributeForwarding();
    });

    it('should receive next selected switchname in the callback', async () => {
        const onSwitchNameChangeCb = jest.fn();

        render(
            <ContentSwitcher onSwitchNameChange={onSwitchNameChangeCb}>
                <ContentSwitcherControl switchName="A">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="B">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="C">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>,
        );

        const contentSwitcherControlElementList = screen.getAllByTestId(
            ContentSwitcherControlRootTestId,
        );
        userEvent.click(contentSwitcherControlElementList[2]);

        expect(onSwitchNameChangeCb).toHaveBeenCalledWith('C');
    });

    it('Uncontrolled case: should show default switch name as selected', async () => {
        render(
            <ContentSwitcher defaultSwitchName="B">
                <ContentSwitcherControl switchName="A">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="B">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="C">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>,
        );

        const contentSwitcherControlElementList = screen.getAllByTestId(
            ContentSwitcherControlRootTestId,
        );

        expect(contentSwitcherControlElementList[1]).toHaveAttribute(
            'data-selected',
            'true',
        );
    });

    it('Controlled case: should show switch name as selected', async () => {
        const onSwitchNameChangeCb = jest.fn();

        render(
            <>
                <ContentSwitcher
                    switchName="B"
                    onSwitchNameChange={onSwitchNameChangeCb}
                >
                    <ContentSwitcherControl switchName="A">
                        <Typography>Option 1</Typography>
                    </ContentSwitcherControl>
                    <ContentSwitcherControl switchName="B">
                        <Typography>Option 2</Typography>
                    </ContentSwitcherControl>
                    <ContentSwitcherControl switchName="C">
                        <Typography>Option 3</Typography>
                    </ContentSwitcherControl>
                </ContentSwitcher>
            </>,
        );

        const contentSwitcherControlElementList = screen.getAllByTestId(
            ContentSwitcherControlRootTestId,
        );

        expect(contentSwitcherControlElementList[1]).toHaveAttribute(
            'data-selected',
            'true',
        );
    });

    it('Controlled case: should not update switchName if the prop value is not updated', async () => {
        const onSwitchNameChangeCb = jest.fn();

        render(
            <>
                <ContentSwitcher
                    switchName="B"
                    onSwitchNameChange={onSwitchNameChangeCb}
                >
                    <ContentSwitcherControl switchName="A">
                        <Typography>Option 1</Typography>
                    </ContentSwitcherControl>
                    <ContentSwitcherControl switchName="B">
                        <Typography>Option 2</Typography>
                    </ContentSwitcherControl>
                    <ContentSwitcherControl switchName="C">
                        <Typography>Option 3</Typography>
                    </ContentSwitcherControl>
                </ContentSwitcher>
            </>,
        );

        const contentSwitcherControlElementList = screen.getAllByTestId(
            ContentSwitcherControlRootTestId,
        );
        userEvent.click(contentSwitcherControlElementList[2]);

        expect(onSwitchNameChangeCb).toHaveBeenCalledWith('C');
        expect(contentSwitcherControlElementList[1]).toHaveAttribute(
            'data-selected',
            'true',
        );
    });
});
