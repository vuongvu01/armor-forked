import { MutableRefObject, useEffect, useMemo, useState } from 'react';

import { Nullable } from '../../type';
import { zIndexModal } from '../../tokens';
import { StackItemParametersType } from './type';

// todo: come up with something more clever than this
export const useDisplay = (open?: boolean) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [effectToggle, setEffectToggle] = useState<boolean>(false);
    useEffect(() => {
        if (!display && open) {
            setDisplay(true);
            setTimeout(() => setEffectToggle(true), 50);
        }

        if (display && !open) {
            setEffectToggle(false);
            setTimeout(() => setDisplay(false), 100);
        }
    }, [!!open]);

    return [display, effectToggle];
};

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
        return this.stack.find(item => item.id === id);
    }

    static getTop() {
        return this.stack.length === 0
            ? null
            : this.stack[this.stack.length - 1];
    }

    static getTopElevation() {
        const top = this.getTop();

        if (top) {
            return top.zIndex;
        }

        return zIndexModal;
    }
}

export const useModalStack = (
    open?: boolean,
    parameters?: StackItemParametersType,
) => {
    const { zIndex } = parameters || {};

    const id = useMemo(() => (Math.random() * 1000).toString(), []);
    useEffect(() => {
        if (open) {
            ModalManager.push(id, { zIndex });
        }

        return () => ModalManager.remove(id);
    }, [id, open, zIndex]);

    return id;
};

// todo: use hashing here to memoize, don't do search every time
export const useModalStackZIndex = (id: string) => {
    const item = ModalManager.get(id);
    return item ? item.zIndex : 0;
};

const cancelWheel = (event: Event) => event.preventDefault();

// const ref = useRef<HTMLDivElement>(null);
// useWheelBlock(ref, true);
export const useWheelBlock = (
    ref: MutableRefObject<Nullable<HTMLDivElement>>,
    enabled: true,
) => {
    useEffect(() => {
        if (ref && ref.current !== null) {
            if (enabled) {
                ref.current.addEventListener('wheel', cancelWheel, {
                    passive: false,
                });
            } else {
                ref.current.removeEventListener('wheel', cancelWheel);
            }
        }

        return () => {
            if (ref && ref.current) {
                ref.current.removeEventListener('wheel', cancelWheel);
            }
        };
    }, [ref, enabled]);
};
