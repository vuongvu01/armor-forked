import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type FormFieldTooltipEffectivePropsType = Partial<{
    visible: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

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
