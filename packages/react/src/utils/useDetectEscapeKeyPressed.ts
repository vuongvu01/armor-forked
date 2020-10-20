import { MutableRefObject, useEffect } from 'react';

function useDetectEscapeKeyPressed(
    ref: MutableRefObject<unknown>,
    setIsOptionListShown?: (isOptionListShown: boolean) => void,
    isCondition?: boolean,
) {
    useEffect(() => {
        if (isCondition) {
            const handleEscapePress = (event: KeyboardEvent) => {
                const { key } = event;

                if (key === 'Escape' && setIsOptionListShown) {
                    setIsOptionListShown(false);
                }
            };

            document.addEventListener('keydown', handleEscapePress);

            return () => {
                document.removeEventListener('keydown', handleEscapePress);
            };
        }

        return () => {};
    }, [ref, setIsOptionListShown, isCondition]);
}

export default useDetectEscapeKeyPressed;
