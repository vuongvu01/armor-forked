import { MouseEvent } from 'react';

import { AccordionEffectivePropsType } from '../type';
import { ComponentElementStylePropsType } from '../../type';

export type AccordionHeaderPropsType = Partial<{
    /** Sets content of the AccordionHeader. It is possible to use *children* as well. */
    title: string;
    /** @ignore */
    isExpanded: boolean;
    /** @ignore */
    onToggle: (event: MouseEvent<HTMLDivElement>) => void;
}> &
    AccordionEffectivePropsType;

export type AccordionHeaderRootPropsType = AccordionHeaderPropsType &
    ComponentElementStylePropsType;
