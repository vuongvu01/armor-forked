import {
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ReactNode,
    HTMLAttributes,
} from 'react';

import {
    HeightAttributesType,
    MarginAttributesType,
    WidthAttributesType,
} from '../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type TextInputEffectivePropsType = Partial<{
    label: string;
    before: ReactNode;
    after: ReactNode;
    large: boolean;
    error: boolean;
    multiline: boolean;
    disableLabelEffect: boolean;
    displayMode: string;
    outlined: boolean;
    enableFocusOnRootClick: boolean;
    enableRootRef: boolean;
    onRootClick: HTMLAttributes<HTMLElement>['onClick'];

    'data-testid-input': string;
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    Pick<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        'cols' | 'rows' | 'wrap' | 'dirName'
    > &
    WidthAttributesType &
    HeightAttributesType &
    MarginAttributesType;

/* TextInput component prop type */
export type TextInputPropsType = TextInputEffectivePropsType &
    ComponentStylePropsType;

type TextInputInternalPropsType = {
    outlined?: boolean;
} & Pick<TextInputEffectivePropsType, 'disabled' | 'large' | 'error' | 'wide'>;

export type TextInputInternalPropsWithThemeType = {
    inside?: boolean;
} & TextInputInternalPropsType &
    Pick<TextInputRootPropsType, 'theme' | 'value' | 'defaultValue' | 'type'>;

/* TextInput Root node prop type */
export type TextInputRootPropsType = TextInputEffectivePropsType &
    TextInputInternalPropsType &
    ComponentElementStylePropsType;

export type TextInputInnerContainerPropsType = Pick<
    TextInputEffectivePropsType,
    'multiline'
> &
    ComponentElementStylePropsType;

/* TextInput Input node prop type */
export type TextInputInputPropsType = TextInputEffectivePropsType &
    ComponentElementStylePropsType;

/* TextInput Label node prop type */
export type TextInputLabelPropsType = Pick<
    TextInputEffectivePropsType,
    'value'
> & {
    inside: boolean;
} & TextInputInternalPropsType &
    ComponentElementStylePropsType;

/* TextInput LabelBackground node prop type */
export type TextInputLabelBackgroundPropsType = Pick<
    TextInputEffectivePropsType,
    'value'
> &
    Pick<TextInputEffectivePropsType, 'disabled'> &
    ComponentElementStylePropsType;
