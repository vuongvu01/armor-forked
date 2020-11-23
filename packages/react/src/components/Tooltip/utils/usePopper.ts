import {
    MutableRefObject,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    createPopper,
    Instance,
    OptionsGeneric,
    Placement,
    PositioningStrategy,
    StrictModifiers,
} from '@popperjs/core';
import { TooltipAlignmentType, TooltipPropsType } from '../type';

const getPopperOptions = (
    arrowReference: MutableRefObject<HTMLElement | null>,
    props: TooltipPropsType,
) => {
    const { align } = props;

    const options: OptionsGeneric<StrictModifiers> = {
        placement: align as Placement,
        strategy: 'absolute' as PositioningStrategy,
        modifiers: [],
    };

    if (!arrowReference.current) {
        return options;
    }

    options.modifiers = [
        {
            name: 'arrow',
            options: {
                // padding: 5, // todo: take from theme
                element: arrowReference.current,
            },
        },
        {
            name: 'flip',
            options: {
                fallbackPlacements: ['top'],
            },
        },
        {
            name: 'offset',
            options: {
                offset: [0, 12], // todo: take from theme
            },
        },
    ];

    return options;
};

export const usePopper = (
    children: ReactNode,
    align?: TooltipAlignmentType,
) => {
    let triggerReference = useRef<Element>();

    const childrenElement = children as ReactElement;
    // @ts-ignore: todo: fixme: LD-97
    if (childrenElement && childrenElement.ref) {
        // @ts-ignore: todo: fixme: LD-97
        triggerReference = childrenElement.ref;
    }

    const tooltipReference = useRef<HTMLElement>();
    const arrowReference = useRef<HTMLElement>(null);

    const [instance, setInstance] = useState<Instance>();

    useEffect(() => {
        setTimeout(() => {
            if (!triggerReference.current || !tooltipReference.current) {
                return;
            }

            const popperOptions = getPopperOptions(arrowReference, { align });

            if (!instance) {
                tooltipReference.current.style.visibility = 'visible';

                setInstance(
                    createPopper(
                        triggerReference.current,
                        tooltipReference.current,
                        popperOptions,
                    ),
                );
            } else {
                instance.setOptions(popperOptions);
            }
        }, 0);

        return () => {
            if (instance) {
                instance.destroy();
            }
        };
    }, [align]);

    return {
        triggerReference,
        tooltipReference,
        arrowReference,
    };
};
