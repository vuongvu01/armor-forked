import React, { forwardRef } from 'react';
import { CancelIcon } from '@deliveryhero/armor-icons';

// import PropTypes from 'prop-types';

import { useFilterViewerTagClassNames } from './hooks/useFilterViewerTagClassNames';
import { useFilterViewerTag } from './hooks/useFilterViewerTag';
import {
    FilterViewerTagRoot,
    FilterViewerTagLabel,
    FilterViewerTagValue,
    FilterViewerTagValueSegment,
    FilterViewerTagValueMoreLink,
    FilterViewerTagValueTailElement,
    FilterViewerTagCloseIconContainer,
} from './style';
import { FilterViewerTagPropsType } from './type';
import { FILTER_VIEWER_TAG_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../../utils/hooks';
import { Tooltip } from '../../../Tooltip';

export const FilterViewerTag = forwardRef<
    HTMLDivElement,
    FilterViewerTagPropsType
>(function FilterViewerTag({ className, ...props }, ref) {
    const theme = useComponentTheme(FILTER_VIEWER_TAG_CLASS_PREFIX);
    const classNames = useFilterViewerTagClassNames(
        FILTER_VIEWER_TAG_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        closeButtonProps,
        label,
        valueHead,
        valueTail,
        hasTail,
        tailLength,
    } = useFilterViewerTag<HTMLDivElement>(props, ref);

    return (
        <FilterViewerTagRoot
            {...rootProps}
            theme={theme}
            className={classNames.Root}
        >
            <FilterViewerTagLabel theme={theme} className={classNames.Label}>
                {label}
            </FilterViewerTagLabel>
            <FilterViewerTagValue theme={theme} className={classNames.Value}>
                {valueHead.map((item, index) => (
                    <FilterViewerTagValueSegment
                        key={index}
                        theme={theme}
                        className={classNames.ValueSegment}
                    >
                        {item}
                    </FilterViewerTagValueSegment>
                ))}
                {hasTail && (
                    <FilterViewerTagValueSegment
                        theme={theme}
                        className={classNames.ValueSegment}
                        moreItems
                    >
                        <Tooltip
                            minWidth={20}
                            maxWidth={70}
                            trigger={
                                <FilterViewerTagValueMoreLink
                                    tag="span"
                                    theme={theme}
                                    className={classNames.ValueMoreLink}
                                >
                                    {tailLength} more
                                </FilterViewerTagValueMoreLink>
                            }
                        >
                            {valueTail.map((item, index) => (
                                <FilterViewerTagValueTailElement
                                    theme={theme}
                                    className={classNames.ValueTailElement}
                                    key={index}
                                >
                                    {item}
                                </FilterViewerTagValueTailElement>
                            ))}
                        </Tooltip>
                    </FilterViewerTagValueSegment>
                )}
            </FilterViewerTagValue>
            <FilterViewerTagCloseIconContainer
                {...closeButtonProps}
                theme={theme}
                className={classNames.CloseIconContainer}
            >
                <CancelIcon small />
            </FilterViewerTagCloseIconContainer>
        </FilterViewerTagRoot>
    );
});

FilterViewerTag.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterViewerTag.propTypes = {};
