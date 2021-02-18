import { zIndexModal } from '../../tokens';

type OverlayType = {
    id: string;
    zIndex: number;
};

export type OverlayParametersType = {
    zIndex?: number;
};

export class OverlayManager {
    static stack: OverlayType[] = [];

    static pushOverlay(id: string, parameters?: OverlayParametersType) {
        const { zIndex } = parameters || {};

        this.stack.push({
            id,
            zIndex:
                typeof zIndex !== 'undefined'
                    ? zIndex
                    : this.getTopOverlayZIndex() + 10,
        });
    }

    static removeOverlay(id: string) {
        this.stack = this.stack.filter(item => item.id !== id);
    }

    static getOverlay(id: string) {
        // todo: use hashing here to memoize, don't do search every time
        return this.stack.find(item => item.id === id);
    }

    static getTopOverlay() {
        return this.stack.length === 0
            ? null
            : this.stack[this.stack.length - 1];
    }

    static isTopOverlay(id: string) {
        const top = this.getTopOverlay();

        return top && top.id === id;
    }

    static getOverlayZIndex(id: string) {
        const item = this.getOverlay(id);

        if (item) {
            return item.zIndex;
        }

        return zIndexModal;
    }

    private static getTopOverlayZIndex() {
        const top = this.getTopOverlay();

        if (top) {
            return top.zIndex;
        }

        return zIndexModal;
    }
}
