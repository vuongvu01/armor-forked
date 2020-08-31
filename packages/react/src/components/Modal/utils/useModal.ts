import { useCallback, useEffect } from 'react';
import { useModalStack } from './useModalStack';
import { useModalStackZIndex } from './useModalStackZIndex';
import { StackItemParametersType } from '../type';
import { ModalManager } from './ModalManager';

export const useModal = ({
    open,
    onClose,
    parameters,
}: {
    open?: boolean;
    onClose?: () => void;
    parameters: StackItemParametersType;
}) => {
    const modalId = useModalStack(open, parameters);
    const elementZIndex = useModalStackZIndex(modalId);
    const isTopModal = useCallback(() => ModalManager.isTop(modalId), [
        modalId,
    ]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key !== 'Escape' || !isTopModal()) {
            return;
        }

        if (onClose) {
            onClose();
            event.stopPropagation();
        }
    }, []);

    const { disableCloseByEscape } = parameters;

    useEffect(() => {
        if (disableCloseByEscape) {
            return () => {};
        }

        document
            .getElementsByTagName('body')[0]
            .addEventListener('keydown', onKeyDown);

        return () =>
            document
                .getElementsByTagName('body')[0]
                .removeEventListener('keydown', onKeyDown);
    }, [onKeyDown, disableCloseByEscape]);

    return {
        modalId,
        elementZIndex,
        isTopModal,
    };
};
