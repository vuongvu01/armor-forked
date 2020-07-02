import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type FormFieldTooltipEffectivePropsType = Indexed<{
    visible?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* FormFieldTooltip component prop type */
export type FormFieldTooltipPropsType = FormFieldTooltipEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Indicator?: string;
            // add custom className for other nodes here
        },
        FormFieldTooltipStylesPropsType
    >;

export type FormFieldTooltipStylesPropsType = {
    Root?: StylesFunctionOrStubType<FormFieldTooltipEffectivePropsType>;
    Indicator?: StylesFunctionOrStubType;
    // add style properties for other nodes here
};

/* FormFieldTooltip Root node prop type */
export type FormFieldTooltipRootPropsType = PropsWithNodeStylePropsType<
    FormFieldTooltipEffectivePropsType
>;

/* FormFieldTooltip Indicator node prop type */
export type FormFieldTooltipIndicatorPropsType = PropsWithNodeStylePropsType<
    Pick<FormFieldTooltipEffectivePropsType, 'visible'>
>;
