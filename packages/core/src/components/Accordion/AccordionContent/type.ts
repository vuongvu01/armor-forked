import { PaddingPropsType } from '@deliveryhero/armor-system';

import { AccordionEffectivePropsType } from '../type';
import { ComponentElementStylePropsType } from '../../type';

export type AccordionContentPropsType = Partial<{
    /** @ignore */
    isExpanded: boolean;
    /** @ignore */
    setIsExpanded: (isExpanded: boolean) => void;
}> &
    AccordionEffectivePropsType &
    PaddingPropsType;

export type AccordionContentRootPropsType = AccordionContentPropsType &
    ComponentElementStylePropsType;
