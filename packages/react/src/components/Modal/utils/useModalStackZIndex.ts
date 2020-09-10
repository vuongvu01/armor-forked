import { ModalManager } from './ModalManager';

export const useModalStackZIndex = (id: string) =>
    ModalManager.getElevation(id);
