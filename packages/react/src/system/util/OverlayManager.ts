import { zIndexModal } from '../../tokens';

type OverlayType = {
    id: string;
    zIndex: number;
    blockWindowScroll: boolean;
};

export type OverlayParametersType = {
    zIndex?: number;
    blockWindowScroll?: boolean;
};

export class OverlayManager {
    static stack: OverlayType[] = [];
    static windowScrollBlocks = 0;

    static pushOverlay(id: string, parameters?: OverlayParametersType) {
        const { zIndex, blockWindowScroll } = parameters || {};

        if (blockWindowScroll) {
            this.windowScrollBlocks += 1;
        }

        this.stack.push({
            id,
            zIndex:
                typeof zIndex !== 'undefined'
                    ? zIndex
                    : this.getTopOverlayZIndex() + 10,
            blockWindowScroll: !!blockWindowScroll,
        });
    }

    static removeOverlay(id: string) {
        const overlay = this.getOverlay(id);
        if (overlay) {
            this.stack = this.stack.filter(item => item.id !== id);
            if (overlay.blockWindowScroll) {
                this.windowScrollBlocks -= 1;
            }
        }
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

    static hasWindowScrollBlock() {
        return this.windowScrollBlocks > 0;
    }

    private static getTopOverlayZIndex() {
        const top = this.getTopOverlay();

        if (top) {
            return top.zIndex;
        }

        return zIndexModal;
    }
}
