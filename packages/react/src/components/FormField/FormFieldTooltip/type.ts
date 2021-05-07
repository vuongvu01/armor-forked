import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { TooltipPropsType } from '../../Tooltip/type';

type FormFieldTooltipEffectivePropsType = Partial<{
    visible: boolean;
    // add other custom properties here
}> &
    TooltipPropsType;

/* FormFieldTooltip component prop type */
export type FormFieldTooltipPropsType = FormFieldTooltipEffectivePropsType &
    ComponentStylePropsType;

/* FormFieldTooltip Root node prop type */
export type FormFieldTooltipRootPropsType = FormFieldTooltipEffectivePropsType &
    ComponentElementStylePropsType;

/* FormFieldTooltip Indicator node prop type */
export type FormFieldTooltipIndicatorPropsType = Pick<
    FormFieldTooltipEffectivePropsType,
    'visible'
> &
    ComponentElementStylePropsType;
