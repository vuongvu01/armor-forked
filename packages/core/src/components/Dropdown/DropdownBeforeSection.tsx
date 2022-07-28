import React, { forwardRef, memo } from 'react';

import {
    DropdownBeforeSectionRoot,
    DropdownBeforeSectionContainer,
    DropdownBeforeSectionWrapper,
    DropdownTag,
} from './style';
import { DROPDOWN_BEFORE_SECTION_CLASS_PREFIX } from './constants';
import { useDropdownBeforeSection } from './hooks/useDropdownBeforeSection';
import { DropdownBeforeSectionPropsType } from './type';
import { useDropdownBeforeSectionClassName } from './hooks';
import { OptionObjectType } from '../OptionList/type';
import { DropdownTags } from './DropdownTags';

export const DropdownBeforeSection = memo(
    forwardRef<HTMLDivElement, DropdownBeforeSectionPropsType>(
        function DropdownBeforeSection({ className, ...props }, ref) {
            const {
                rootProps,
                getDropdownTagProps,
                getDropdownRemainingTagsProps,
                dropdownBeforeSectionContainerProps,
                dropdownBeforeSectionWrapperProps,
                dropdownTagsProps,

                disabled,
                isRendered,
                isRenderedSelectedValueAsNode,
                selectedTagsToDisplay,
                internalOpenTagsCount,
                selectedValueToDisplay,
            } = useDropdownBeforeSection(props, ref);

            const classOverride = useDropdownBeforeSectionClassName(
                DROPDOWN_BEFORE_SECTION_CLASS_PREFIX,
                className,
                disabled,
            );

            if (!isRendered) {
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
                    <DropdownBeforeSectionContainer
                        {...dropdownBeforeSectionContainerProps}
                        className={classOverride.TagsContainer}
                    >
                        <DropdownBeforeSectionWrapper
                            {...dropdownBeforeSectionWrapperProps}
                            className={classOverride.TagsWrapper}
                        >
                            {isRenderedSelectedValueAsNode
                                ? selectedValueToDisplay
                                : renderTags()}
                        </DropdownBeforeSectionWrapper>
                    </DropdownBeforeSectionContainer>
                </DropdownBeforeSectionRoot>
            );
        },
    ),
);

DropdownBeforeSection.displayName = DROPDOWN_BEFORE_SECTION_CLASS_PREFIX;
