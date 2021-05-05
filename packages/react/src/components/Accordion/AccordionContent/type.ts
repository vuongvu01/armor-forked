import { AccordionEffectivePropsType } from '../type';
import { ComponentElementStylePropsType } from '../../type';

export type AccordionContentPropsType = Partial<{
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
}> &
    AccordionEffectivePropsType;

export type AccordionContentRootPropsType = AccordionContentPropsType &
    ComponentElementStylePropsType;
