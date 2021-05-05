import { MouseEvent } from 'react';

import { AccordionEffectivePropsType } from '../type';
import { ComponentElementStylePropsType } from '../../type';

export type AccordionHeaderPropsType = Partial<{
    title: string;
    isExpanded: boolean;
    onToggle: (event: MouseEvent<HTMLDivElement>) => void;
}> &
    AccordionEffectivePropsType;

export type AccordionHeaderRootPropsType = AccordionHeaderPropsType &
    ComponentElementStylePropsType;
