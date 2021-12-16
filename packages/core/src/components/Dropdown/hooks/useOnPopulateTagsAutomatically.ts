import { useEffect } from 'react';
import { RESIZE_OBSERVER_SUPPORTED } from '@deliveryhero/armor-system';

import {
    BUFFER_TAGS_WIDTH,
    SINGLE_LINE_MAX_ALLOWED_HEIGHT,
} from '../constants';
import { MutableReferenceType } from '../../../type';
import { DropdownInternalOptionType } from '../type';

export const useOnPopulateTagsAutomatically = (
    selectedTagsToDisplay: DropdownInternalOptionType,
    beforeSectionContainerRef: MutableReferenceType,
    beforeSectionWrapperRef: MutableReferenceType,
    isMaxWidthReached: boolean,
    setIsMaxWidthReached: (isMaxWidthReached: boolean) => void,
    internalOpenTagsCount: number,
    setInternalOpenTagsCount: (internalOpenTagsCount: number) => void,
    singleLine?: boolean,
) =>
    useEffect(() => {
        let observer: any = null;

        if (
            RESIZE_OBSERVER_SUPPORTED &&
            singleLine &&
            beforeSectionContainerRef.current
        ) {
            // @ts-ignore
            observer = new ResizeObserver(entries => {
                const [tagContainer, tagWrapper] = entries;

                if (!tagContainer || !tagWrapper) {
                    return;
                }

                const {
                    width: containerNodeWidth,
                } = tagContainer.target.getBoundingClientRect();

                const {
                    width: wrapperNodeWidth,
                    height: wrapperNodeHeight,
                } = tagWrapper.target.getBoundingClientRect();

                const cumulativeMaxWidth =
                    wrapperNodeWidth + BUFFER_TAGS_WIDTH * 2;

                if (
                    !isMaxWidthReached &&
                    cumulativeMaxWidth <= containerNodeWidth
                ) {
                    setInternalOpenTagsCount(internalOpenTagsCount + 1);
                } else if (
                    (!isMaxWidthReached &&
                        cumulativeMaxWidth > containerNodeWidth) ||
                    wrapperNodeHeight > SINGLE_LINE_MAX_ALLOWED_HEIGHT
                ) {
                    setIsMaxWidthReached(true);
                    setInternalOpenTagsCount(internalOpenTagsCount - 1);
                }

                if (
                    !isMaxWidthReached &&
                    cumulativeMaxWidth > containerNodeWidth
                ) {
                    setIsMaxWidthReached(true);
                }
            });

            observer.observe(beforeSectionContainerRef.current);
            observer.observe(beforeSectionWrapperRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [
        selectedTagsToDisplay.length,
        internalOpenTagsCount,
        isMaxWidthReached,
        singleLine,
        beforeSectionContainerRef,
        beforeSectionWrapperRef,
        setInternalOpenTagsCount,
        setIsMaxWidthReached,
    ]);
