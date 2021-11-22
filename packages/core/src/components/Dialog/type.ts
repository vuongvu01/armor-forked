import { HTMLAttributes, MouseEvent } from 'react';
import {
    SizePropsType,
    ComponentBehaviourOpenStateType,
    ComponentBehaviourOverlayType,
    ComponentBehaviourPortalType,
    ComponentBehaviourModalDialogType,
} from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type DialogEffectivePropsType = Partial<{
    /**
     * Regulates whether the body of a Dialog or a document window receives scroll when there is content overflow in the Dialog
     * @armor-docs-expand ScrollType
     */
    scroll: ScrollType;

    /**
     * An opposite alias for **enableBackdrop**
     * @deprecated
     * @see enableBackdrop
     * */
    disableOverlay: boolean;
    /**
     * An opposite alias for **enableEffects**
     * @deprecated
     * @see enableEffects
     */
    disableEffects: boolean;
    /**
     * An opposite alias for **enableCloseButton**
     * @deprecated
     * @see enableCloseButton
     * */
    disableCloseButton: boolean;
    /**
     * An opposite alias for **enableCloseByEscape**
     * @deprecated
     * @see enableCloseByEscape */
    disableCloseByEscape: boolean;
    /**
     * Is called when the dialog gets closed
     * @deprecated
     * @see onOpenChange
     * */
    onClose: () => void;
    /**
     * Is called when the dialog close button gets clicked
     * @deprecated
     * */
    onCloseButtonClick: (event: MouseEvent<HTMLDivElement>) => void;

    // add other custom properties here
}> &
    ComponentBehaviourModalDialogType &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> &
    SizePropsType; // don't delete! it is forwarded to the window element

/* Dialog component prop type */
export type DialogPropsType = DialogEffectivePropsType &
    ComponentStylePropsType;

/* Dialog AlignmentContainer node prop type */
export type DialogAlignmentContainerPropsType = {
    display: boolean;
    enableCloseButton?: boolean;
    scroll?: ScrollType;
} & DialogEffectivePropsType &
    ComponentElementStylePropsType;

/* Dialog Root node prop type */
export type DialogRootPropsType = DialogEffectivePropsType &
    ComponentElementStylePropsType;

/* Dialog Content node prop type */
export type DialogContentPropsType = ComponentElementStylePropsType;

/* Dialog Close Button node prop type */
export type DialogCloseButtonPropsType = ComponentElementStylePropsType;

export type DialogWindowPropsType = {
    enableEffects: boolean;
    effectToggle: boolean;
    scroll?: ScrollType;
} & SizePropsType &
    ComponentElementStylePropsType;

type ScrollType = 'document' | 'dialog';
