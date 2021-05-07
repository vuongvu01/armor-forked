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

type DialogEffectivePropsType = Partial<{
    scroll: ScrollType;

    /** @deprecated @see enableOverlay */
    disableOverlay: boolean;
    /** @deprecated @see enableEffects */
    disableEffects: boolean;
    /** @deprecated @see enableCloseButton */
    disableCloseButton: boolean;
    /** @deprecated @see enableCloseByEscape */
    disableCloseByEscape: boolean;
    /** @deprecated @see onOpenChange */
    onClose: () => void;
    /** @deprecated */
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
