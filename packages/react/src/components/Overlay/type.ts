import { HTMLAttributes } from 'react';

import { SizeAttributesType } from '../../system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

type OverlayEffectivePropsType = Partial<{
    disableEffects: boolean;
    display: boolean;
    effectToggle: boolean;
    onClick: () => void;
}> &
    HTMLAttributes<HTMLDivElement> &
    SizeAttributesType;

export type OverlayPropsType = OverlayEffectivePropsType &
    ComponentStylePropsType;

export type OverlayRootPropsType = OverlayEffectivePropsType &
    ComponentElementStylePropsType;
