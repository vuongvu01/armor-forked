import { useEffect, useMemo } from 'react';
import { StackItemParametersType } from '../type';
import { ModalManager } from './ModalManager';
import { generateId } from '../../../utils';

export const useModalStack = (
    open?: boolean,
    parameters?: StackItemParametersType,
) => {
    const { zIndex } = parameters || {};

    const id = useMemo(() => generateId(), []);
    useEffect(() => {
        if (open) {
            ModalManager.push(id, { zIndex });
        }

        return () => ModalManager.remove(id);
    }, [id, open, zIndex]);

    return id;
};
