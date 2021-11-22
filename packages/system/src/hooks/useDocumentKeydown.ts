import { useEffect } from 'react';

export const useDocumentKeydown = (
    onKeyDown: (event: KeyboardEvent) => void,
): void => {
    useEffect(() => {
        document
            .getElementsByTagName('body')[0]
            .addEventListener('keydown', onKeyDown);

        return () =>
            document
                .getElementsByTagName('body')[0]
                .removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);
};
