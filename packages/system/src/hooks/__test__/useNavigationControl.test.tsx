/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    renderHook,
    cleanup as cleanupHooks,
    act,
} from '@testing-library/react-hooks';
import { useNavigationControl } from '../useNavigationControl';

describe('useNavigationControl', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const containerRef = { current: null };

        renderHook(() => useNavigationControl({ targetElement: containerRef }));
    });

    it('should move horizontal cursor properly', () => {
        const { result } = renderHook(() => useRef(null));
        const containerRef = result.current;
        render(<input ref={containerRef} data-testid="test-id" />);

        const cursorState = renderHook(() => useState(4));
        const [, setCursorX] = cursorState.result.current;

        renderHook(() =>
            useNavigationControl({
                targetElement: containerRef,
                setCursorX,
                xLength: 10,
            }),
        );

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowright}');
        });
        expect(cursorState.result.current[0]).toBe(5);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowleft}');
        });
        expect(cursorState.result.current[0]).toBe(4);

        act(() => {
            setCursorX(9);
            userEvent.type(screen.getByTestId('test-id'), '{arrowright}');
        });
        expect(cursorState.result.current[0]).toBe(0);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowleft}');
        });
        expect(cursorState.result.current[0]).toBe(9);
    });

    it('should move vertical cursor properly', () => {
        const { result } = renderHook(() => useRef(null));
        const containerRef = result.current;
        render(<input ref={containerRef} data-testid="test-id" />);

        const cursorState = renderHook(() => useState(4));
        const [, setCursorY] = cursorState.result.current;

        renderHook(() =>
            useNavigationControl({
                targetElement: containerRef,
                setCursorY,
                yLength: 10,
            }),
        );

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowdown}');
        });
        expect(cursorState.result.current[0]).toBe(5);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowup}');
        });
        expect(cursorState.result.current[0]).toBe(4);

        act(() => {
            setCursorY(9);
            userEvent.type(screen.getByTestId('test-id'), '{arrowdown}');
        });
        expect(cursorState.result.current[0]).toBe(0);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowup}');
        });
        expect(cursorState.result.current[0]).toBe(9);
    });

    it('should trigger correct handlers', () => {
        const { result } = renderHook(() => useRef(null));
        const containerRef = result.current;
        render(<input ref={containerRef} data-testid="test-id" />);

        const cursorState = renderHook(() => useState(4));
        const [, setCursorY] = cursorState.result.current;

        const mockOnNavigationKeyPress = jest.fn();
        const mockOnEnterKeyPress = jest.fn();
        const mockOnEscapeKeyPress = jest.fn();
        const mockOnOtherKeyPress = jest.fn();

        renderHook(() =>
            useNavigationControl({
                targetElement: containerRef,
                setCursorY,
                yLength: 10,
                onNavigationKeyPress: mockOnNavigationKeyPress,
                onEnterKeyPress: mockOnEnterKeyPress,
                onEscapeKeyPress: mockOnEscapeKeyPress,
                onOtherKeysPress: mockOnOtherKeyPress,
            }),
        );

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{arrowdown}');
        });
        expect(mockOnNavigationKeyPress).toHaveBeenCalledTimes(1);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{enter}');
        });
        expect(mockOnEnterKeyPress).toHaveBeenCalledTimes(1);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{esc}');
        });
        expect(mockOnEscapeKeyPress).toHaveBeenCalledTimes(1);

        act(() => {
            userEvent.type(screen.getByTestId('test-id'), '{del}');
        });
        expect(mockOnOtherKeyPress).toHaveBeenCalledTimes(1);
    });
});
