import { HTMLAttributes, MouseEvent } from 'react';

import { SizeAttributesType } from '../../system';
import { Indexed } from '../../type';
import { ModalPropsType } from '../Modal/type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

type DialogEffectivePropsType = Indexed<{
    disableOverlay?: boolean;
    disableEffects?: boolean;
    disableCloseButton?: boolean;
    scroll?: ScrollType;
    onCloseButtonClick?: (event: MouseEvent<HTMLDivElement>) => void;
    // add other custom properties here
}> &
    Pick<
        ModalPropsType,
        'open' | 'onClose' | 'zIndex' | 'disableCloseByEscape'
    > & // includes two props from Modal
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType;

/* Dialog component prop type */
export type DialogPropsType = DialogEffectivePropsType &
    ComponentStylePropsType;

/* Dialog AlignmentContainer node prop type */
export type DialogAlignmentContainerPropsType = {
    display: boolean;
    disableCloseButton?: boolean;
    scroll?: ScrollType;
} & DialogEffectivePropsType &
    ComponentElementStylePropsType;

/* Dialog Root node prop type */
export type DialogBasePropsType = DialogEffectivePropsType &
    ComponentElementStylePropsType;

/* Dialog Content node prop type */
export type DialogContentPropsType = ComponentElementStylePropsType;

/* Dialog Close Button node prop type */
export type DialogCloseButtonPropsType = ComponentElementStylePropsType;

type ScrollType = 'document' | 'dialog';
