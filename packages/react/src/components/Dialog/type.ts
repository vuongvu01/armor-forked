import { HTMLAttributes, MouseEvent } from 'react';

import { SizeAttributesType } from '../../system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { ComponentBehaviourModalDialogType } from '../../system/types/ComponentBehaviourModalDialogType';

/** 👉 PROPS TYPE */
type DialogEffectivePropsType = Partial<{
    /** Regulates whether the body of a Dialog or a document window receives scroll when there is content overflow in the Dialog */
    scroll: ScrollType;

    /**
     * An opposite alias for **enableBackdrop**
     * @deprecated
     * @see enableBackdrop
     * */
    disableOverlay: boolean;
    /**
     * An opposite alias for **enableEffects**
     * @deprecated @see enableEffects
     * */
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
    onCloseButtonClick?: (event: MouseEvent<HTMLDivElement>) => void;

    // add other custom properties here
}> &
    ComponentBehaviourModalDialogType &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> &
    SizeAttributesType; // don't delete! it is forwarded to the window element

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
} & SizeAttributesType &
    ComponentElementStylePropsType;

type ScrollType = 'document' | 'dialog';
