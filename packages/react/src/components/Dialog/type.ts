import { HTMLAttributes, MouseEvent } from 'react';

import { SizeAttributesType } from '../../system';
import { ObjectLiteralType } from '../../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';

type DialogEffectivePropsType = Partial<{
    scroll: ScrollType;
    onCloseButtonClick?: (event: MouseEvent<HTMLDivElement>) => void;

    enableBackdrop: boolean;
    enableCloseButton: boolean;
    enableCloseByEscape: boolean;
    enableEffects: boolean;

    /** @deprecated @see onOpenChange */
    onClose: () => void;
    /** @deprecated @see enableOverlay */
    disableOverlay: boolean;
    /** @deprecated @see enableEffects */
    disableEffects: boolean;
    /** @deprecated @see enableCloseButton */
    disableCloseButton: boolean;
    /** @deprecated @see enableCloseByEscape */
    disableCloseByEscape: boolean;

    // add other custom properties here
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType &
    ObjectLiteralType;

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
