import { MutableRefObject, useEffect } from 'react';

function useDetectClickOutsideComponent(
    ref: MutableRefObject<unknown>,
    setIsOptionListShown: (isOptionListShown: boolean) => void,
) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const node = ref.current as any;

            if (node && !node.contains(event.target)) {
                setIsOptionListShown(false);
            }
        };

        document.addEventListener('mouseup', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref, setIsOptionListShown]);
}

export default useDetectClickOutsideComponent;
