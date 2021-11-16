import { MutableRefObject, useEffect } from 'react';

/**
 * @deprecated
 * @see useOuterClick
 * */
export const useDetectClickOutsideComponent = (
    ref: MutableRefObject<unknown> | null,
    setIsOptionListShown?: (isOptionListShown: boolean) => void,
    isCondition?: boolean,
    triggerRef?: MutableRefObject<HTMLElement> | null,
) => {
    useEffect(() => {
        if (isCondition) {
            const handleClickOutside = (event: MouseEvent) => {
                if (!ref) {
                    return;
                }

                const node = ref.current as any; // todo: fix any

                if (
                    node &&
                    !node.contains(event.target) &&
                    setIsOptionListShown &&
                    (!triggerRef ||
                        !triggerRef.current ||
                        !triggerRef.current.contains(event.target as Node))
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
    }, [ref, setIsOptionListShown, isCondition, triggerRef]);
};
