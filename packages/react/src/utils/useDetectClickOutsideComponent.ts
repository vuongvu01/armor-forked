import React, { MutableRefObject, useEffect } from 'react';

function useDetectClickOutsideComponent(
    ref: MutableRefObject<unknown>,
    setIsOptionListShown?: (isOptionListShown: boolean) => void,
    isCondition?: boolean,
) {
    useEffect(() => {
        if (isCondition) {
            const handleClickOutside = (event: MouseEvent) => {
                const node = ref.current as any;

                if (
                    node &&
                    !node.contains(event.target) &&
                    setIsOptionListShown
                ) {
                    setIsOptionListShown(false);
                }
            };

            document.addEventListener('mouseup', handleClickOutside);

            return () => {
                document.removeEventListener('mouseup', handleClickOutside);
            };
        }

        return () => {};
    }, [ref, setIsOptionListShown, isCondition]);
}

export default useDetectClickOutsideComponent;
