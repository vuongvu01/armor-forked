import {
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ReactNode,
    HTMLAttributes,
} from 'react';
import {
    HeightPropsType,
    MarginPropsType,
    WidthPropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type TextInputEffectivePropsType = Partial<{
    /** If defined, the component will receive an animated label */
    label: string;
    /** If specified, will be injected into the component and displayed just *before* the actual input field */
    before: ReactNode;
    /** If specified, will be injected into the component and displayed directly *after* the actual input field */
    after: ReactNode;
    /** If set to true, the spacing of the component will be increased to match the *large* scale */
    large: boolean;
    /** If set to true, the component will receive a red border to indicate that the field value contains an error */
    error: boolean;
    /** If set to true, the component will be rendered as textarea */
    multiline: boolean;
    /** If set to true, the label will always stay on top of the component */
    disableLabelEffect: boolean;
    /** Controls whether the component is displayed as block or an inline-block */
    displayMode: string;
    /** @ignore */
    outlined: boolean;
    /**
     * If set to true, the HTML input will receive focus back in case if a user clicks somewhere between the HTML input and the component root node.
     * This is useful in combination with *before* and *after* props, or when the spacing between the component root node and the HTML input was artificially increased
     */
    enableFocusOnRootClick: boolean;
    /**
     * By default the *ref* property is forwarded to the HTML input. While this is useful due to the pragmatic reasons, sometimes it is necessary to forward the *ref* prop to the root node instead, just like all the rest of the components normally do. So, *enableRootRef*, being set to true, does the trick
     */
    enableRootRef: boolean;
    /** By default the *onClick* property is forwarded to the HTML input. While this is useful due to the pragmatic reasons, sometimes it is necessary to forward the *onClick* prop to the root node instead, just like all the rest of the components normally do. So, *onRootClick* is forwarded to the root node instead, doing the trick */
    onRootClick: HTMLAttributes<HTMLElement>['onClick'];

    'data-testid-input': string;
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    Pick<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        'cols' | 'rows' | 'wrap' | 'dirName'
    > &
    WidthPropsType &
    HeightPropsType &
    MarginPropsType;

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
