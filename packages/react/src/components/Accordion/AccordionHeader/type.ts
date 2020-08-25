import { MouseEvent } from 'react';

import { AccordionEffectivePropsType } from '../type';
import { Indexed } from '../../../type';

export type AccordionHeaderPropsType = Indexed<{
    title?: string;
    isExpanded?: boolean;
    onToggle?: (event: MouseEvent<HTMLInputElement>) => void;
}> &
    AccordionEffectivePropsType;

export type AccordionHeaderRootPropsType = AccordionHeaderPropsType;
