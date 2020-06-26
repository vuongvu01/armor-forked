import { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed } from '../../type';

type TextInputEffectivePropsType = Indexed<{
    exampleProperty?: boolean;
    label?: string;
    before?: ReactNode;
    after?: ReactNode;
    big?: boolean;
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
} & Pick<TextInputEffectivePropsType, 'disabled' | 'big' | 'error' | 'wide'>;

export type TextInputInternalPropsWithThemeType = TextInputInternalPropsType &
    Pick<TextInputRootPropsType, 'theme'>;

/* TextInput Root node prop type */
export type TextInputRootPropsType = PropsWithNodeStylePropsType<
    TextInputEffectivePropsType & TextInputInternalPropsType
>;

/* TextInput Input node prop type */
export type TextInputInputPropsType = PropsWithNodeStylePropsType<
    TextInputEffectivePropsType
>;

/* TextInput Label node prop type */
export type TextInputLabelPropsType = PropsWithNodeStylePropsType<
    {
        inside: boolean;
    } & TextInputInternalPropsType
>;

/* TextInput LabelBackground node prop type */
export type TextInputLabelBackgroundPropsType = PropsWithNodeStylePropsType<
    Pick<TextInputEffectivePropsType, 'disabled'>
>;
