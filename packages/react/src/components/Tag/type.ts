import { HTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../system';
import { ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourLinkType } from '../../system/types/ComponentBehaviourLinkType';

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

/** 👉 PROPS TYPE */
type TagEffectivePropsType = Partial<{
    /**
     * @armor-docs-expand TagDeleteIconModeType, TagIconDisabled, TagIconEnabled, TagIconOnHover
     */
    deleteOption: TagDeleteIconModeType;
    code: ScalarType;
    isActive: boolean;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
    onDeselect: (tagCode?: ScalarType) => void;
    /**
     * @armor-docs-expand TagType, TagTypeDefault, TagTypeApproved, TagTypeDenied, TagTypeNew
     */
    type: TagType;
    disabled: boolean;
    label: ScalarType;
    small: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    ComponentBehaviourLinkType &
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

export type TagTextPropsType = Partial<{
    smallVerticalPadding: boolean;
}> &
    Pick<TagEffectivePropsType, 'deleteOption'> &
    Pick<ComponentElementStylePropsType, 'theme'>;
