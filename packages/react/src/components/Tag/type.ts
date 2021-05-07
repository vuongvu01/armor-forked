import { AnchorHTMLAttributes, HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../system';
import { ScalarType } from '../../type';
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
    small?: boolean;
};

type TagEffectivePropsType = Partial<{
    deleteOption: TagDeleteIconModeType;
    code: ScalarType;
    isActive: boolean;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
    onDeselect: (tagCode?: ScalarType) => void;
    type: TagType;
    disabled: boolean;
    label: string;
    small: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> &
    MarginAttributesType;

export type TagPropsType = TagEffectivePropsType;

export type TagRootPropsType = TagEffectivePropsType &
    ComponentElementStylePropsType;

export type TagCloseIconContainerPropsType = Pick<
    TagEffectivePropsType,
    'deleteOption' | 'onClick' | 'tabIndex' | 'type' | 'disabled' | 'small'
> &
    ComponentElementStylePropsType;

export type TagCloseIconPropsType = Pick<
    ComponentElementStylePropsType,
    'theme'
>;

export type TagTypographyPropsType = Partial<{
    smallVerticalPadding: boolean;
}> &
    Pick<TagEffectivePropsType, 'deleteOption'> &
    Pick<ComponentElementStylePropsType, 'theme'>;
