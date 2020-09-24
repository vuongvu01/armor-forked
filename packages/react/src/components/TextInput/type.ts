import { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import { Indexed } from '../../type';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';

type TextInputEffectivePropsType = Indexed<{
    label?: string;
    before?: ReactNode;
    after?: ReactNode;
    large?: boolean;
    error?: boolean;
    multiline?: boolean;
    disableLabelEffect?: boolean;
    displayMode?: 'block' | 'inline';
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    Pick<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        'cols' | 'rows' | 'wrap' | 'dirName'
    > &
    WidthAttributesType &
    MarginAttributesType;

/* TextInput component prop type */
export type TextInputPropsType = TextInputEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Input?: string;
            Label?: string;
            LabelBackground?: string;
            // add custom className for other nodes here
        },
        TextInputStylesPropsType
    >;

export type TextInputStylesPropsType = {
    Root?: StylesFunctionOrStubType<TextInputEffectivePropsType>;
    Input?: StylesFunctionOrStubType;
    Label?: StylesFunctionOrStubType;
    LabelBackground?: StylesFunctionOrStubType;
    // add style properties for other nodes here
};

type TextInputInternalPropsType = {
    outlined?: boolean;
} & Pick<TextInputEffectivePropsType, 'disabled' | 'large' | 'error' | 'wide'>;

export type TextInputInternalPropsWithThemeType = {
    inside?: boolean;
} & TextInputInternalPropsType &
    Pick<TextInputRootPropsType, 'theme' | 'value'>;

/* TextInput Root node prop type */
export type TextInputRootPropsType = PropsWithNodeStylePropsType<
    TextInputEffectivePropsType & TextInputInternalPropsType
>;

/* TextInput Input node prop type */
export type TextInputContainerPropsType = PropsWithNodeStylePropsType<
    TextInputEffectivePropsType
>;

/* TextInput Label node prop type */
export type TextInputLabelPropsType = Pick<
    TextInputEffectivePropsType,
    'value'
> &
    PropsWithNodeStylePropsType<
        {
            inside: boolean;
        } & TextInputInternalPropsType
    >;

/* TextInput LabelBackground node prop type */
export type TextInputLabelBackgroundPropsType = Pick<
    TextInputEffectivePropsType,
    'value'
> &
    PropsWithNodeStylePropsType<Pick<TextInputEffectivePropsType, 'disabled'>>;
// string | string[] | number;
