import { AccordionEffectivePropsType } from '../type';
import { Indexed } from '../../../type';

export type AccordionContentPropsType = Indexed<{
    isExpanded?: boolean;
    setIsExpanded?: (isExpanded: boolean) => void;
}> &
    AccordionEffectivePropsType;

export type AccordionContentRootPropsType = AccordionContentPropsType;
