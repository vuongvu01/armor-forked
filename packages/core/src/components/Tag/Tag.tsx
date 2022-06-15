import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { isStatusTag, useTagClassName } from './utils';
import { TagDeleteIconModeType, TagPropsType } from './type';
import { TAG_CLASS_PREFIX, TAG_DELETE_BEHAVIOUR_OPTIONS } from './constants';
import {
    TagCloseIcon,
    TagCloseIconContainer,
    TagRoot,
    TagText,
    TagIndicatorContainer,
    TagIconContainer,
} from './style';
import { useTag } from './utils/useTag';

/**
 * # Tag
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/37a5b1-tag/b/09d7b1)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Tag } from '@deliveryhero/armor';
 *
 * <Tag label="Default" deleteOption="disabled" marginRight={3} />
 * <Tag label="Small" deleteOption="disabled" small />
 * <Tag label="Default" marginRight={3} />
 * <Tag label="Small" small />
 * <Tag label="Default" marginRight={3} disabled />
 * <Tag label="Small" disabled small />
 * <Tag label="Default" deleteOption="enabled" marginRight={3} />
 * <Tag label="Small" deleteOption="enabled" small />
 * <Tag
 *     label="Default"
 *     deleteOption="enabled"
 *     marginRight={3}
 *     disabled
 * />
 * <Tag label="Default" deleteOption="enabled" disabled small />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Tag = forwardRef<HTMLDivElement, TagPropsType>(function Tag(
    { className, ...restProps },
    ref,
) {
    const {
        rootProps,
        tagTypographyProps,
        tagCloseIconContainerProps,
        content,
        deleteOption,
        type,
        disabled,
        small,
        filled,
        indicator,
        indicatorContainerProps,
        icon,
        iconContainerProps,
    } = useTag(restProps, ref);

    const classOverride = useTagClassName(
        TAG_CLASS_PREFIX,
        className,
        deleteOption,
        type,
        small,
        filled,
    );

    const tagTypeStatus = isStatusTag(type);

    return (
        <TagRoot {...rootProps} className={classOverride.Root}>
            {indicator && tagTypeStatus && (
                <TagIndicatorContainer {...indicatorContainerProps}>
                    {indicator}
                </TagIndicatorContainer>
            )}
            {icon && tagTypeStatus && !indicator && (
                <TagIconContainer {...iconContainerProps}>
                    {icon}
                </TagIconContainer>
            )}
            <TagText {...tagTypographyProps} className={classOverride.Label}>
                {content}
            </TagText>
            {!tagTypeStatus &&
            (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED ||
                (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER &&
                    !disabled)) ? (
                <TagCloseIconContainer
                    {...tagCloseIconContainerProps}
                    className={classOverride.CloseIconContainer}
                >
                    <TagCloseIcon className={classOverride.CloseIcon} />
                </TagCloseIconContainer>
            ) : null}
        </TagRoot>
    );
});

Tag.defaultProps = {
    deleteOption: 'onHover',
    type: 'default',
};

Tag.propTypes = {
    deleteOption: PropTypes.oneOf(['disabled', 'enabled', 'onHover']),
    label: PropTypes.string,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['default', 'approved', 'denied', 'new', 'on-hold']),
    small: PropTypes.bool,
    filled: PropTypes.bool,
};

export const MemoizedTag = memo(Tag);
