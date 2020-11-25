import { HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type TagTypeDefault = 'default';
export type TagTypeApproved = 'approved';
export type TagTypeDenied = 'denied';
export type TagTypeNew = 'new';

export type TagIconDisabled = 'disabled';
export type TagIconEnabled = 'enabled';
export type TagIconOnHover = 'onHover';

export type TagType =
    | TagTypeDefault
    | TagTypeApproved
    | TagTypeDenied
    | TagTypeNew;

export type TagDeleteIconModeType =
    | TagIconDisabled
    | TagIconEnabled
    | TagIconOnHover;

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    deleteOption?: TagDeleteIconModeType;
    isActive?: boolean;
    onClose?: (event: MouseEvent<HTMLDivElement>) => void;
    type?: TagType;
};

type TagEffectivePropsType = Indexed<{
    deleteOption?: TagDeleteIconModeType;
    code?: ScalarType;
    isActive?: boolean;
    onClose?: (event: MouseEvent<HTMLDivElement>) => void;
    onDeselect?: (tagCode?: ScalarType) => void;
    type?: TagType;
    label?: string;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type TagPropsType = TagEffectivePropsType;

export type TagRootPropsType = TagEffectivePropsType &
    ComponentElementStylePropsType;

export type TagCloseIconContainerPropsType = Pick<
    TagEffectivePropsType,
    'className' | 'deleteOption' | 'onClick' | 'tabIndex' | 'theme' | 'type'
>;
export type TagCloseIconPropsType = Pick<TagEffectivePropsType, 'theme'>;
export type TagTypographyPropsType = Pick<
    TagEffectivePropsType,
    'deleteOption' | 'theme'
>;
