import { zIndexModal } from '../../../tokens';
import { StackItemParametersType } from '../type';

type ModalDescriptor = {
    id: string;
    zIndex: number;
};

export class ModalManager {
    static stack: ModalDescriptor[] = [];

    static push(id: string, parameters?: StackItemParametersType) {
        const { zIndex } = parameters || {};

        this.stack.push({
            id,
            zIndex:
                typeof zIndex !== 'undefined'
                    ? zIndex
                    : this.getTopElevation() + 10,
        });
    }

    static remove(id: string) {
        this.stack = this.stack.filter(item => item.id !== id);
    }

    static get(id: string) {
        // todo: use hashing here to memoize, don't do search every time
        return this.stack.find(item => item.id === id);
    }

    static getTop() {
        return this.stack.length === 0
            ? null
            : this.stack[this.stack.length - 1];
    }

    static isTop(id: string) {
        const top = this.getTop();

        return top && top.id === id;
    }

    static getTopElevation() {
        const top = this.getTop();

        if (top) {
            return top.zIndex;
        }

        return zIndexModal;
    }

    static getElevation(id: string) {
        const item = this.get(id);

        if (item) {
            return item.zIndex;
        }

        return zIndexModal;
    }
}
