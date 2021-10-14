import { AccordionEffectivePropsType } from '../type';
import { ComponentElementStylePropsType } from '../../type';
import { PaddingAttributesType } from '../../../system';

export type AccordionContentPropsType = Partial<{
    /** @ignore */
    isExpanded: boolean;
    /** @ignore */
    setIsExpanded: (isExpanded: boolean) => void;
}> &
    AccordionEffectivePropsType &
    PaddingAttributesType;

export type AccordionContentRootPropsType = AccordionContentPropsType &
    ComponentElementStylePropsType;
