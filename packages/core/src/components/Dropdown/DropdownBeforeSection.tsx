import React, { forwardRef } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
    DropdownBeforeSectionActionContainer,
    DropdownBeforeSectionClearButton,
    DropdownBeforeSectionRoot,
    DropdownBeforeSectionTagsContainer,
    DropdownBeforeSectionTagsWrapper,
    DropdownTag,
    DropdownCancelIcon,
} from './style';
import { DROPDOWN_BEFORE_SECTION_CLASS_PREFIX } from './constants';
import { useDropdownBeforeSection } from './hooks/useDropdownBeforeSection';
import { DropdownBeforeSectionPropsType } from './type';
import { useDropdownBeforeSectionClassName } from './hooks';
import { OptionObjectType } from '../OptionList/type';
import { DropdownTags } from './DropdownTags';

export const DropdownBeforeSection = forwardRef<
    HTMLDivElement,
    DropdownBeforeSectionPropsType
>(function DropdownBeforeSection({ className, ...props }, ref) {
    const {
        rootProps,
        beforeSectionClearButtonProps,
        getDropdownTagProps,
        getDropdownRemainingTagsProps,
        dropdownBeforeSectionTagsContainerProps,
        dropdownBeforeSectionTagsWrapperProps,
        dropdownTagsProps,

        disabled,
        isBeforeSectionRendered,
        selectedTagsToDisplay,
        internalOpenTagsCount,
    } = useDropdownBeforeSection(props, ref);

    const classOverride = useDropdownBeforeSectionClassName(
        DROPDOWN_BEFORE_SECTION_CLASS_PREFIX,
        className,
        disabled,
    );

    if (!isBeforeSectionRendered) {
        return null;
    }

    const renderTags = () => {
        if (internalOpenTagsCount > 0) {
            const remainingItemsCount =
                selectedTagsToDisplay.length - internalOpenTagsCount;
            const tagsToRender = selectedTagsToDisplay.slice(
                0,
                internalOpenTagsCount,
            );
            const remainingTagsValues = selectedTagsToDisplay
                .slice(internalOpenTagsCount)
                .map((option: OptionObjectType) => option.value);

            const openTags = (
                <DropdownTags
                    {...dropdownTagsProps}
                    className={className}
                    tagsToDisplay={tagsToRender}
                    propsFn={getDropdownTagProps}
                />
            );

            const remainingItemsTag = (
                <DropdownTag
                    {...getDropdownRemainingTagsProps(
                        remainingItemsCount,
                        remainingTagsValues,
                    )}
                    className={classOverride.DropdownTagRemainingItems}
                />
            );

            return [
                openTags,
                remainingItemsCount > 0 ? remainingItemsTag : null,
            ];
        }

        return (
            <DropdownTags
                {...dropdownTagsProps}
                className={className}
                tagsToDisplay={selectedTagsToDisplay}
                propsFn={getDropdownTagProps}
            />
        );
    };

    return (
        <DropdownBeforeSectionRoot
            {...rootProps}
            className={classOverride.Root}
        >
            <DropdownBeforeSectionTagsContainer
                {...dropdownBeforeSectionTagsContainerProps}
                className={classOverride.TagsContainer}
            >
                <DropdownBeforeSectionTagsWrapper
                    {...dropdownBeforeSectionTagsWrapperProps}
                    className={classOverride.TagsWrapper}
                >
                    {renderTags()}
                </DropdownBeforeSectionTagsWrapper>
            </DropdownBeforeSectionTagsContainer>

            <DropdownBeforeSectionActionContainer
                className={classOverride.ActionContainer}
            >
                {selectedTagsToDisplay?.length ? (
                    <DropdownBeforeSectionClearButton
                        {...beforeSectionClearButtonProps}
                        className={classOverride.ClearButton}
                    >
                        <DropdownCancelIcon />
                    </DropdownBeforeSectionClearButton>
                ) : null}
            </DropdownBeforeSectionActionContainer>
        </DropdownBeforeSectionRoot>
    );
});
