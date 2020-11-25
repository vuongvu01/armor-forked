import { HTMLAttributes } from 'react';

import { SizeAttributesType } from '../../system';
import { Indexed } from '../../type';
import { ModalPropsType } from '../Modal/type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

type OverlayEffectivePropsType = Indexed<{
    className?: string;
    disableEffects?: boolean;
    disableOverlay?: boolean;
    open?: boolean;
    onClick?: () => void;
}> &
    Pick<ModalPropsType, 'open' | 'onClose' | 'zIndex'> &
    HTMLAttributes<HTMLDivElement> &
    SizeAttributesType;

export type OverlayPropsType = OverlayEffectivePropsType &
    ComponentStylePropsType;

export type OverlayRootPropsType = OverlayEffectivePropsType &
    ComponentElementStylePropsType;
