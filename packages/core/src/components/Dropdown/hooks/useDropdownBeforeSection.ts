import { useCallback, useRef, useState } from 'react';
import {
    stringEllipsisAtMaxCharacters,
    useRootRef,
    stripHTMLTagsMemoized as stripHTMLTags,
} from '@deliveryhero/armor-system';

import { useOnValueUpdate } from '../../../utils/dropdown';
import { RefType } from '../../../type';
import {
    DropdownBeforeSectionPropsType,
    DropdownInternalValueType,
} from '../type';
import { useSelectedTagsToDisplay } from './useSelectedTagsToDisplay';
import { OptionObjectType } from '../../OptionList/type';
import { useOnRemoveMultiple } from './useOnRemoveMultiple';
import { useOnPopulateTagsAutomatically } from './useOnPopulateTagsAutomatically';

export const useDropdownBeforeSection = <E extends HTMLDivElement>(
    {
        disabled,
        onClick,
        internalValue,
        setInternalValue,
        onSelect,
        onChange,
        internalOptions,
        options,
        isFlat,
        multiple,
        tagLabelMaxLength,
        openTagsCount = 1,
        renderAggregatedTagsLabel,
        singleLine,
        isRendered,
        isRenderedSelectedValueAsNode,
        selectedValueToDisplay,
        ...restProps
    }: DropdownBeforeSectionPropsType,
    ref: RefType<E>,
) => {
    const containerRef = useRootRef<E>(ref);
    const beforeSectionContainerRef = useRef(null);
    const beforeSectionWrapperRef = useRef(null);

    const [isMaxWidthReached, setIsMaxWidthReached] = useState(false);

    const [internalOpenTagsCount, setInternalOpenTagsCount] = useState(
        singleLine ? 1 : openTagsCount,
    );

    const selectedTagsToDisplay = useSelectedTagsToDisplay(
        internalValue,
        internalOptions,
    );

    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onSelect,
        onChange,
    );

    const onRemoveMultiple = useOnRemoveMultiple(
        setInternalValue,
        internalValue,
        onChange,
    );

    useOnPopulateTagsAutomatically(
        selectedTagsToDisplay,
        beforeSectionContainerRef,
        beforeSectionWrapperRef,
        isMaxWidthReached,
        setIsMaxWidthReached,
        internalOpenTagsCount,
        setInternalOpenTagsCount,
        singleLine,
    );

    const handleRemoveTag = (option: OptionObjectType) => () =>
        onValueUpdate(
            internalValue,
            multiple,
            option,
            option.value,
            options,
            isFlat,
        );

    const handleRemoveRemainingTags =
        (tagValuesToRemove: DropdownInternalValueType) => () =>
            onRemoveMultiple(tagValuesToRemove);

    const getAggregatedTagsLabel = useCallback(
        (remainingItemsCount: number) => {
            if (renderAggregatedTagsLabel) {
                return renderAggregatedTagsLabel(remainingItemsCount);
            }

            return `+${remainingItemsCount} item${
                remainingItemsCount === 1 ? '' : 's'
            }`;
        },
        [renderAggregatedTagsLabel],
    );

    return {
        rootProps: {
            ...restProps,
            onClick,
            disabled,
            ref: containerRef,
            singleLine,
        },
        getDropdownTagProps: (option: OptionObjectType) => {
            const label = stringEllipsisAtMaxCharacters(
                stripHTMLTags(option.label),
                tagLabelMaxLength,
            );

            return {
                deleteOption: 'enabled',
                disabled,
                label,
                onClose: handleRemoveTag(option),
                key: option.value,
            };
        },
        getDropdownRemainingTagsProps: (
            remainingItemsCount: number,
            tagsValues: DropdownInternalValueType,
        ) => ({
            key: 'remaining_items',
            disabled,
            label: getAggregatedTagsLabel(remainingItemsCount),
            onClose: handleRemoveRemainingTags(tagsValues),
        }),
        dropdownBeforeSectionContainerProps: {
            ref: beforeSectionContainerRef,
        },
        dropdownBeforeSectionWrapperProps: {
            ref: beforeSectionWrapperRef,
        },
        dropdownTagsProps: {
            disabled,
            key: 'expanded_tags',
        },
        disabled,
        isRendered,
        isRenderedSelectedValueAsNode,
        selectedTagsToDisplay,
        internalOpenTagsCount,
        selectedValueToDisplay,
    };
};
