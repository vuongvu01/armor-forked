import { MouseEvent, useCallback, useMemo, useRef, useState } from 'react';
import {
    noop,
    stringEllipsisAtMaxCharacters,
    useRootRef,
} from '@deliveryhero/armor-system';

import { useOnValueUpdate } from '../../../utils/dropdown';
import { RefType } from '../../../type';
import {
    DropdownBeforeSectionPropsType,
    DropdownInternalValueType,
} from '../type';
import { useSelectedTagsToDisplay } from './useSelectedTagsToDisplay';
import { OptionObjectType } from '../../OptionList/type';
import { useOnToggleAll } from './useOnToggleAll';
import { useOnRemoveMultiple } from './useOnRemoveMultiple';
import { useOnPopulateTagsAutomatically } from './useOnPopulateTagsAutomatically';

export const useDropdownBeforeSection = <E extends HTMLDivElement>(
    {
        disabled,
        onClick,
        internalValue,
        setInternalValue,
        setInitialSelection,
        onSelect,
        onChange,
        internalOptions,
        options,
        isFlat,
        multiple,
        onRenderSelectedValue,
        tagLabelMaxLength,
        openTagsCount = 1,
        renderAggregatedTagsLabel,
        singleLine,
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

    const onToggleAll = useOnToggleAll(
        setInternalValue,
        internalOptions,
        internalValue,
        onChange,
        setInitialSelection,
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

    const handleRemoveAllTags = useMemo(
        () =>
            disabled
                ? noop
                : (event: MouseEvent<HTMLDivElement>) => {
                      event.stopPropagation();

                      onToggleAll(false);
                  },
        [disabled, onToggleAll],
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

    const handleRemoveRemainingTags = (
        tagValuesToRemove: DropdownInternalValueType,
    ) => () => onRemoveMultiple(tagValuesToRemove);

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
        beforeSectionClearButtonProps: {
            disabled,
            onClick: handleRemoveAllTags,
        },
        getDropdownTagProps: (option: OptionObjectType) => {
            let { label } = option;
            if (typeof label === 'string' || typeof label === 'number') {
                label = stringEllipsisAtMaxCharacters(
                    option.label.toString(),
                    tagLabelMaxLength,
                );
            }

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
        dropdownBeforeSectionTagsContainerProps: {
            ref: beforeSectionContainerRef,
        },
        dropdownBeforeSectionTagsWrapperProps: {
            ref: beforeSectionWrapperRef,
        },
        dropdownTagsProps: {
            disabled,
            key: 'expanded_tags',
        },
        disabled,
        isBeforeSectionRendered: multiple && !onRenderSelectedValue,
        selectedTagsToDisplay,
        internalOpenTagsCount,
    };
};