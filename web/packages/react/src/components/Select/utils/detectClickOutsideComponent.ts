import { MutableRefObject, useEffect } from 'react';

function detectClickOutsideComponent(
    ref: MutableRefObject<any>,
    isOptionListShown: boolean,
    hideOptionList: () => void,
) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const node = ref.current as any;

            if (
                isOptionListShown &&
                node &&
                !node.contains(event.target) &&
                hideOptionList
            ) {
                hideOptionList();
            }
        };

        document.addEventListener('mouseup', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref, isOptionListShown]);
}

export default detectClickOutsideComponent;
