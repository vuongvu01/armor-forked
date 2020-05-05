import {
    MutableRefObject,
    Ref,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { zIndexModal } from '../../tokens';
import { Nullable } from '../../type';

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
    elevation: number;
};

export class ModalManager {
    static stack: ModalDescriptor[] = [];

    static push(id: string) {
        this.stack.push({
            id,
            elevation: this.getTopElevation() + 10,
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
            return top.elevation;
        }

        return zIndexModal;
    }
}

export const useElevation = (open?: boolean) => {
    const id = useMemo(() => (Math.random() * 1000).toString(), []);
    const [elevation, setElevation] = useState(0);
    useEffect(() => {
        if (open) {
            ModalManager.push(id);
            setElevation(ModalManager.getTopElevation());
        }

        return () => ModalManager.remove(id);
    }, [id, open]);

    return elevation;
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