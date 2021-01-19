import { MutableRefObject, useEffect } from 'react';

export const useDetectEscapeKeyPressed = (
    ref: MutableRefObject<unknown>,
    setIsOptionListShown?: (isOptionListShown: boolean) => void,
    isCondition?: boolean,
    callbackFn?: () => void,
) => {
    useEffect(() => {
        if (isCondition) {
            const handleEscapePress = (event: KeyboardEvent) => {
                const { key } = event;

                if (key === 'Escape' && setIsOptionListShown) {
                    setIsOptionListShown(false);

                    if (callbackFn) {
                        callbackFn();
                    }
                }
            };

            document.addEventListener('keydown', handleEscapePress);

            return () => {
                document.removeEventListener('keydown', handleEscapePress);
            };
        }

        return () => {};
    }, [ref, setIsOptionListShown, isCondition, callbackFn]);
};

export default useDetectEscapeKeyPressed;
