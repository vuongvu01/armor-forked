import { MutableRefObject } from 'react';
import {
    OptionsGeneric,
    Placement,
    PositioningStrategy,
    StrictModifiers,
} from '@popperjs/core';
import { TooltipPropsType } from '../type';

export const getPopperOptions = (
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
