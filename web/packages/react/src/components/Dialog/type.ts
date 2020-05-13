import { HTMLAttributes } from 'react';
import {
    StyleNodePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';
import { SizeAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ModalPropsType } from '../Modal/type';

type DialogEffectivePropsType = Indexed<{
    disableOverlay?: boolean;
    disableEffects?: boolean;
    disableCloseButton?: boolean;
    scroll?: ScrollType;
    // add other custom properties here
}> &
    Pick<ModalPropsType, 'open' | 'onClose'> & // includes two props from Modal
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType;

/* Dialog component prop type */
export type DialogPropsType = DialogEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Overlay?: string;
            AlignmentContainer?: string;
            CloseButton?: string;
            Content?: string;
            // add custom className for other nodes here
        },
        DialogStylesPropsType
    >;

export type DialogStylesPropsType = {
    Root?: StylesFunctionOrStubType<DialogEffectivePropsType>;
    Overlay?: StylesFunctionOrStubType;
    AlignmentContainer?: StylesFunctionOrStubType;
    CloseButton?: StylesFunctionOrStubType;
    Content?: StylesFunctionOrStubType;
    // add style properties for other nodes here
};

/* Dialog Overlay node prop type */
export type DialogOverlayPropsType = Pick<
    DialogEffectivePropsType,
    'disableEffects'
> & {
    display: boolean;
    effectToggle: boolean;
} & StyleNodePropsType;

/* Dialog AlignmentContainer node prop type */
export type DialogAlignmentContainerPropsType = {
    display: boolean;
    disableCloseButton?: boolean;
    scroll?: ScrollType;
} & StyleNodePropsType<DialogEffectivePropsType>;

/* Dialog Root node prop type */
export type DialogRootPropsType = DialogEffectivePropsType &
    StyleNodePropsType<DialogEffectivePropsType>;

/* Dialog Content node prop type */
export type DialogContentPropsType = StyleNodePropsType;

/* Dialog Close Button node prop type */
export type DialogCloseButtonPropsType = StyleNodePropsType;

type ScrollType = 'document' | 'dialog';
