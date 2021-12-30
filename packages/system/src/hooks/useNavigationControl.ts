import { useCallback, MutableRefObject, SetStateAction } from 'react';
import { useEventListener } from './useEventListener';

type Props = {
    setCursorX?: (value: SetStateAction<number>) => void;
    setCursorY?: (value: SetStateAction<number>) => void;
    xLength?: number;
    yLength?: number;
    targetElement: MutableRefObject<any>;
    disabled?: boolean;
    onNavigationKeyPress?: () => void;
    onEnterKeyPress?: () => void;
    onEscapeKeyPress?: () => void;
    onOtherKeysPress?: () => void;
};

enum Keyboard {
    ARROW_UP = 'ArrowUp',
    ARROW_DOWN = 'ArrowDown',
    ARROW_LEFT = 'ArrowLeft',
    ARROW_RIGHT = 'ArrowRight',
    ENTER = 'Enter',
    ESCAPE = 'Escape',
}

const arrowKeyList: string[] = [
    Keyboard.ARROW_UP,
    Keyboard.ARROW_DOWN,
    Keyboard.ARROW_LEFT,
    Keyboard.ARROW_RIGHT,
];

export const useNavigationControl = ({
    setCursorX,
    setCursorY,
    xLength,
    yLength,
    targetElement,
    onNavigationKeyPress,
    onEnterKeyPress,
    onEscapeKeyPress,
    onOtherKeysPress,
    disabled,
}: Props): void => {
    const getNextCursor = useCallback(
        (currentCursor: number, key: Keyboard, limit?: number): number => {
            if ((!currentCursor && currentCursor !== 0) || !limit) {
                return 0;
            }

            switch (key) {
                case Keyboard.ARROW_UP:
                case Keyboard.ARROW_LEFT:
                    return currentCursor > 0 ? currentCursor - 1 : limit - 1;

                case Keyboard.ARROW_DOWN:
                case Keyboard.ARROW_RIGHT:
                    return currentCursor < limit - 1 ? currentCursor + 1 : 0;

                default:
                    break;
            }
            return 0;
        },
        [],
    );

    const handleArrowKeyPress = useCallback(
        (key: Keyboard) => {
            if (key === Keyboard.ARROW_LEFT || key === Keyboard.ARROW_RIGHT) {
                setCursorX?.((currentCursor: number) => {
                    return getNextCursor(currentCursor, key, xLength);
                });
            }
            if (key === Keyboard.ARROW_UP || key === Keyboard.ARROW_DOWN) {
                setCursorY?.((currentCursor: number) => {
                    return getNextCursor(currentCursor, key, yLength);
                });
            }
        },
        [setCursorX, setCursorY, getNextCursor, xLength, yLength],
    );

    const keyHandler = useCallback(
        (event: KeyboardEvent) => {
            const { key, target } = event;

            if (target === targetElement.current) {
                if (arrowKeyList.includes(key)) {
                    handleArrowKeyPress(key as Keyboard);
                    onNavigationKeyPress?.();
                } else if (key === Keyboard.ENTER) {
                    onEnterKeyPress?.();
                } else if (key === Keyboard.ESCAPE) {
                    onEscapeKeyPress?.();
                } else {
                    onOtherKeysPress?.();
                }
            }
        },
        [
            handleArrowKeyPress,
            onEnterKeyPress,
            onEscapeKeyPress,
            onNavigationKeyPress,
            onOtherKeysPress,
            targetElement,
        ],
    );

    useEventListener('keydown', keyHandler, targetElement, disabled);
};
