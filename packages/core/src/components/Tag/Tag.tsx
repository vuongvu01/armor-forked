import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTagClassName } from './utils';
import { TagPropsType } from './type';
import { TAG_CLASS_PREFIX } from './constants';
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
        small,
        filled,
        indicator,
        indicatorContainerProps,
        icon,
        iconContainerProps,
        showIndicator,
        showIcon,
        showClearButton,
        clearButtonProps,
    } = useTag(restProps, ref);

    const classOverride = useTagClassName(
        TAG_CLASS_PREFIX,
        className,
        deleteOption,
        type,
        small,
        filled,
    );

    return (
        <TagRoot {...rootProps} className={classOverride.Root}>
            {showIndicator && (
                <TagIndicatorContainer
                    {...indicatorContainerProps}
                    className={classOverride.Indicator}
                >
                    {indicator}
                </TagIndicatorContainer>
            )}

            {showIcon && (
                <TagIconContainer
                    {...iconContainerProps}
                    className={classOverride.Icon}
                >
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
