import { ModalManager } from './ModalManager';

/**
 * @deprecated
 */
export const useModalStackZIndex = (id: string) =>
    ModalManager.getElevation(id);
