// eslint-disable-next-line import/no-extraneous-dependencies
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import React, { useState, FC } from 'react';
import { useDidUpdateEffect } from '../useDidUpdateEffect';

describe('useDidUpdateEffect', () => {
    let App: FC<React.PropsWithChildren<unknown>>;
    beforeEach(() => {
        App = function TestApp() {
            const [value, setValue] = useState(0);
            const [hasUpdated, setHasUpdated] = useState(0);
            useDidUpdateEffect(() => {
                setHasUpdated(hasUpdated + 1);
            }, [value > 0]);

            return (
                <div>
                    <button
                        data-testid="trigger-btn"
                        onClick={() => setValue(value + 1)}
                    >
                        Trigger updation
                    </button>
                    <span data-testid="value">{value.toString()}</span>
                    <span data-testid="element">{hasUpdated}</span>
                </div>
            );
        };
    });

    afterEach(cleanup);

    it('should be defined', () => {
        expect(useDidUpdateEffect).toBeDefined();
    });

    it('initializes correctly', () => {
        const { getByTestId } = render(<App />);
        const renderedElement = getByTestId('element');
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(0);
    });

    it('does not get called on mount', () => {
        const { getByTestId } = render(<App />);
        const renderedElement = getByTestId('element');
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(0);
    });

    it('gets called if a state value changes', () => {
        const { getByTestId } = render(<App />);
        const renderedElement = getByTestId('element');
        const valueElement = getByTestId('value');
        const triggerElement = getByTestId('trigger-btn');
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(0);
        act(() => {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent), 10)).toEqual(
            1,
        );
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(1);
    });

    it('does not get called if state value has not updated', () => {
        const { getByTestId } = render(<App />);
        const renderedElement = getByTestId('element');
        const valueElement = getByTestId('value');
        const triggerElement = getByTestId('trigger-btn');
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(0);
        act(() => {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent), 10)).toEqual(
            1,
        );
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(1);
        act(() => {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent), 10)).toEqual(
            2,
        );
        expect(
            Number.parseInt(String(renderedElement.textContent), 10),
        ).toEqual(1);
    });
});
