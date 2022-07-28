import {
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    ReactChild,
} from 'react';
import {
    MarginPropsType,
    WidthPropsType,
    ComponentBehaviourOpenStateType,
    ComponentBehaviourPortalType,
    ComponentBehaviourOverlayType,
    ScalarType,
} from '@deliveryhero/armor-system';

import {
    DictionaryItemIDBasedType,
    ObjectLiteralType,
    PseudoEventType,
} from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { OptionObjectType } from '../OptionList/type';
import { TextInputPropsType } from '../TextInput/type';
import { OptionListPropsType } from '../OptionList';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionItemType = string | OptionObjectType;
export type OptionType = OptionItemType[];

export type DropdownValueType =
    | string
    | ReadonlyArray<number | string>
    | number;

export type DropdownInternalValueType = ReadonlyArray<number | string>;

export type DropdownInternalOptionType = OptionObjectType[];

export type DropdownSelectedOptionType = string | OptionItemType;

export type DropDownOnSelectType = (
    selectedOption: DropdownSelectedOptionType,
    itemIndex?: number,
) => void;

export type DropdownOnValueUpdateType = (
    value: DropdownInternalValueType,
    multiple: boolean | undefined,
    selectedOption: OptionObjectType,
    itemIndex?: ScalarType,
    options?: OptionType,
    isFlat?: boolean,
) => void;

export type DropdownOnToggleAllType = (selectAll?: boolean) => void;
export type DropdownOnToggleGroupType = (groupId: ScalarType) => void;
export type DropdownOnRemoveMultipleType = (
    tagValuesToRemove: DropdownInternalValueType,
) => void;

export type DropdownOnChangeEventType = PseudoEventType<DropdownValueType>;
export type DropdownOnConfirmEventType = PseudoEventType<DropdownValueType>;

export type DropdownOnChangeType = (event: DropdownOnChangeEventType) => void;
export type OptionFormatType = (option: OptionItemType) => string;

export type DropdownBeforeSectionPropsType = {
    internalValue: DropdownInternalValueType;
    internalOptions: DropdownInternalOptionType;
    setInternalValue: (nextValue: DropdownInternalValueType) => void;
    setInitialSelection: (nextValue: DropdownInternalValueType) => void;
    isFlat: boolean;
    isRendered: boolean;
    isRenderedSelectedValueAsNode: boolean;
    selectedValueToDisplay: ReactChild;
} & Pick<
    DropdownEffectivePropsType,
    | 'onRenderSelectedValue'
    | 'disabled'
    | 'multiple'
    | 'onChange'
    | 'options'
    | 'onSelect'
    | 'tagLabelMaxLength'
    | 'openTagsCount'
    | 'renderAggregatedTagsLabel'
    | 'singleLine'
> &
    ObjectLiteralType;

export type DropdownTagsSectionPropsType = ObjectLiteralType;

export type DropdownTagsPropsType = {
    tagsToDisplay: DropdownInternalOptionType;
    propsFn: (option: OptionObjectType) => object;
} & ObjectLiteralType;

export type DropdownGroupObjectType = DictionaryItemIDBasedType &
    ObjectLiteralType;

/** 👉 PROPS TYPE */
export type DropdownEffectivePropsType = Partial<{
    error: boolean;
    displaySeparator: boolean;
    /**
     * @deprecated
     * @see `defaultOpen` property
     */
    isListExpanded: boolean;
    isSelected: boolean;
    enableSelectAllOption: boolean;
    selectAllLabel: string;
    searchPlaceholder: string;
    defaultSearchQuery: string;
    enableSearchOption: boolean;
    enableVirtualization: boolean;
    enableOptionContentEllipsis: boolean;
    enableFooter: boolean;
    preserveSelection: boolean; // this should be used only when the new data set is a superset of the original set
    /**
     * @armor-docs-expand DropdownInternalValueType
     */
    onCancelClick: (initialSelection: DropdownInternalValueType) => void;
    /**
     * @armor-docs-expand DropdownInternalValueType
     */
    onConfirmClick: (initialSelection: DropdownInternalValueType) => void;
    footerContent: ReactNode;
    singleLine: boolean;
    tagLabelMaxLength: number;
    openTagsCount: number;
    /**
     * @armor-docs-expand OptionItemType
     */
    item: string | OptionItemType;
    itemIndex: number;
    onOptionSelect: (itemIndex: number) => void;
    /**
     * @armor-docs-expand DropDownOnSelectType
     */
    onSelect: DropDownOnSelectType;
    selectedValue: string | number;
    isActionSeparatorDisplayed: boolean;
    label: string;
    /**
     * @armor-docs-expand OptionItemType
     */
    options: string[] | OptionItemType[];
    multiple: boolean;
    /**
     * @armor-docs-expand DropdownValueType
     */
    value: DropdownValueType;
    defaultValue:
        | string
        | ReadonlyArray<string>
        | ReadonlyArray<number>
        | number;
    /**
     * @armor-docs-expand DropdownOnChangeEventType
     */
    onChange: (event: DropdownOnChangeEventType) => void;
    /**
     * @armor-docs-expand DropdownInternalValueType, DropdownInternalOptionType
     */
    onRenderSelectedValue: (
        value: DropdownInternalValueType,
        options: DropdownInternalOptionType,
    ) => ReactChild;
    /**
     * @armor-docs-expand OptionFormatType
     */
    formatOption: OptionFormatType;
    renderAggregatedTagsLabel: (aggregatedTagsCount: number) => string;
    /**
     * @armor-docs-expand DropdownGroupObjectType, DictionaryItemIDBased
     */
    groups: DropdownGroupObjectType[];
    enableGroupSelection: boolean; // can only be used in tandem with `multiple` prop
    isOptionListShown: boolean;
    renderItemAdditionalInfo?: OptionListPropsType['renderItemAdditionalInfo'];

    'data-testid-input': string;

    /**
     * @deprecated
     * inline by default
     */
    inline: boolean;

    /** If set, the dropdown width will never exceed this value */
    maxDropdownWidth: ScalarType;
    /** If set, the dropdown width will never be smaller than this value */
    minDropdownWidth: ScalarType;
    /** If set, the dropdown height will never exceed this value */
    maxDropdownHeight: ScalarType;

    /** If set to true, the spacing of the component will be increased to match the *large* scale */
    large: boolean;
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourPortalType &
    ComponentBehaviourOverlayType &
    Pick<
        InputHTMLAttributes<HTMLInputElement>,
        'autoFocus' | 'name' | 'disabled' | 'autoComplete'
    > &
    Omit<
        HTMLAttributes<HTMLElement>,
        'onChange' | 'defaultValue' | 'value' | 'onSelect'
    > &
    MarginPropsType &
    WidthPropsType;

export type DropdownPropsType = DropdownEffectivePropsType;

export type ExpansionIndicatorContainerPropsType = ObjectLiteralType;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    ComponentElementStylePropsType;

export type DropdownOptionListContainerPropsType = {
    zIndex: number;
} & WidthPropsType;

export type DropdownTextInputPropsType = {
    isCustomRenderer: boolean;
    internalValue: DropdownInternalValueType;
} & Pick<TextInputPropsType, 'disabled' | 'multiple'>;
