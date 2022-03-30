/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { Button } from '../..';

describe('<Button />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Button />);
    });

    it('should contain correct CSS classes and properties', () => {
        let result = render(<Button />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary'],
        });

        result = render(<Button primary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary'],
        });

        result = render(<Button secondary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['secondary'],
        });

        result = render(<Button tertiary />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['tertiary'],
        });

        result = render(<Button primary danger wide small />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary', 'danger', 'wide', 'small'],
        });

        result = render(<Button disabled />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Button', {
            Root: ['primary', 'disabled'],
        });
    });

    it('should support component override', () => {
        expect(
            <Button>With custom theme</Button>,
            // @ts-ignore
        ).toSupportOverride('Button');
    });

    it('should render itself as different kind of tag', () => {
        const result = render(<Button tag="a" href="https://google.com" />);
        const element = result.container.querySelector('.Button-Root');
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute('href', 'https://google.com');
    });

    it('should support button properties', () => {
        let result = render(<Button disabled />);
        let element = result.container.querySelector('.Button-Root');
        expect(element).toBeInstanceOf(HTMLButtonElement);
        expect(element).toBeDisabled();

        const onClick = jest.fn();
        result = render(<Button onClick={onClick} type="submit" />);
        element = result.container.querySelector('.Button-Root');
        userEvent.click(element!);
        expect(onClick).toHaveBeenCalled();
        expect(element).toHaveAttribute('type', 'submit');
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef<HTMLButtonElement>(null));
        render(<Button ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(Button).toSupportWidthProps();
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Button).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(Button).toSupportPaddingProps();
    });
});
