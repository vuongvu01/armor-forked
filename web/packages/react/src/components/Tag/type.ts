import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

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
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    deleteOption?: TagDeleteIconModeType;
    isActive?: boolean;
    onClose?: () => void;
    type?: TagType;
};

type TagEffectivePropsType = Indexed<{
    value?: string | number;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type TagPropsType = TagEffectivePropsType;

export type TagRootPropsType = TagEffectivePropsType &
    NodeStylePropsType<TagEffectivePropsType>;

export type TagCloseIconContainerPropsType = Pick<
    TagEffectivePropsType,
    'className' | 'deleteOption' | 'onClick' | 'tabIndex' | 'theme' | 'type'
>;
export type TagCloseIconPropsType = Pick<TagEffectivePropsType, 'theme'>;
