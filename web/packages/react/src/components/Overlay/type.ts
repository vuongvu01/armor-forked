import { HTMLAttributes } from 'react';

import { SizeAttributesType } from '../../system';
import { Indexed } from '../../type';
import { ModalPropsType } from '../Modal/type';

type OverlayEffectivePropsType = Indexed<{
    className?: any;
    disableEffects?: any;
    disableOverlay?: any;
    open?: any;
    onClick?: () => void;
    styles?: any;
    theme?: any;
}> &
    Pick<ModalPropsType, 'open' | 'onClose' | 'zIndex'> &
    HTMLAttributes<HTMLDivElement> &
    SizeAttributesType;

export type OverlayPropsType = OverlayEffectivePropsType;
