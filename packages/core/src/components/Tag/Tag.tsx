import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { isStatusTag, useTagClassName } from './utils';
import { TagPropsType } from './type';
import { TAG_CLASS_PREFIX, TAG_CLEAR_BUTTON_PROPS_MAP } from './constants';
import {
    TagClearButtonContainer,
    TagRoot,
    TagText,
    TagIndicatorContainer,
    TagIconContainer,
} from './style';
import { useTag } from './utils/useTag';
import { ClearButton } from '../ClearButton';

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
        tagTextProps,
        tagClearButtonProps,
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

    const showIndicator = Boolean(indicator && tagTypeStatus);

    const showIcon = Boolean(icon && tagTypeStatus && !indicator);

    const showClearButton = Boolean(
        !tagTypeStatus &&
            !disabled &&
            (deleteOption === 'enabled' || deleteOption === 'onHover'),
    );

    const clearButtonProps =
        deleteOption && deleteOption in TAG_CLEAR_BUTTON_PROPS_MAP
            ? TAG_CLEAR_BUTTON_PROPS_MAP[deleteOption]
            : {};

    return (
        <TagRoot {...rootProps} className={classOverride.Root}>
            {showIndicator && (
                <TagIndicatorContainer {...indicatorContainerProps}>
                    {indicator}
                </TagIndicatorContainer>
            )}

            {showIcon && (
                <TagIconContainer {...iconContainerProps}>
                    {icon}
                </TagIconContainer>
            )}

            <TagText {...tagTextProps} className={classOverride.Label}>
                {content}
            </TagText>

            {showClearButton && (
                <TagClearButtonContainer
                    {...tagClearButtonProps}
                    className={classOverride.CloseIconContainer}
                >
                    <ClearButton
                        {...clearButtonProps}
                        size={small ? 'medium' : undefined}
                        className={classOverride.CloseIcon}
                    />
                </TagClearButtonContainer>
            )}
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
