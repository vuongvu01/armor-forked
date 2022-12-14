import React, { forwardRef, memo } from 'react';

import { useConditionTagClassNames } from './hooks/useConditionTagClassNames';
import { useConditionTag } from './hooks/useConditionTag';
import {
    ConditionTagRoot,
    ConditionTagLabel,
    ConditionTagValue,
    ConditionTagValueSegment,
    ConditionTagValueMoreLink,
    ConditionTagValueTailElement,
    ConditionTagCloseIconContainer,
} from './style';
import { ConditionTagPropsType } from './type';
import { CONDITION_TAG_CLASS_PREFIX } from './constants';
import { Tooltip } from '../Tooltip';
import { ClearButton } from '../ClearButton';

/**
 * # ConditionTag
 *
 * @armor-docs-component
 */
export const ConditionTag = forwardRef<HTMLDivElement, ConditionTagPropsType>(
    function ConditionTag({ className, ...props }, ref) {
        const classNames = useConditionTagClassNames(
            CONDITION_TAG_CLASS_PREFIX,
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
            enableCloseIcon,
        } = useConditionTag<HTMLDivElement>(props, ref);

        return (
            <ConditionTagRoot {...rootProps} className={classNames.Root}>
                <ConditionTagLabel className={classNames.Label}>
                    {label}
                </ConditionTagLabel>
                <ConditionTagValue className={classNames.Value}>
                    {valueHead.map((item, index) => (
                        <ConditionTagValueSegment
                            key={index}
                            className={classNames.ValueSegment}
                        >
                            {item}
                        </ConditionTagValueSegment>
                    ))}
                    {hasTail && (
                        <ConditionTagValueSegment
                            className={classNames.ValueSegment}
                        >
                            <Tooltip
                                minWidth={20}
                                maxWidth={70}
                                trigger={
                                    <ConditionTagValueMoreLink
                                        tag="span"
                                        className={classNames.ValueMoreLink}
                                    >
                                        {tailLength} more
                                    </ConditionTagValueMoreLink>
                                }
                            >
                                {valueTail.map((item, index) => (
                                    <ConditionTagValueTailElement
                                        className={classNames.ValueTailElement}
                                        key={index}
                                    >
                                        {item}
                                    </ConditionTagValueTailElement>
                                ))}
                            </Tooltip>
                        </ConditionTagValueSegment>
                    )}
                </ConditionTagValue>
                {enableCloseIcon && (
                    <ConditionTagCloseIconContainer
                        {...closeButtonProps}
                        className={classNames.CloseIconContainer}
                    >
                        <ClearButton />
                    </ConditionTagCloseIconContainer>
                )}
            </ConditionTagRoot>
        );
    },
);

ConditionTag.defaultProps = {
    enableCloseIcon: true,
};

/** prop-types are required here for run-time checks */
ConditionTag.propTypes = {};

export const MemoizedConditionTag = memo(ConditionTag);
