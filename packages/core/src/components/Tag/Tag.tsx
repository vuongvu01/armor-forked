import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { isStatusTag, useTagClassName } from './utils';
import { TagDeleteIconModeType, TagPropsType } from './type';
import { tagDefaultTheme } from './theme';
import { TAG_CLASS_PREFIX, TAG_DELETE_BEHAVIOUR_OPTIONS } from './constants';
import { TagCloseIcon, TagCloseIconContainer, TagRoot, TagText } from './style';
import { useTag } from './utils/useTag';

/**
 * @armor-docs-component
 */
export const Tag = forwardRef<HTMLDivElement, TagPropsType>(function Tag(
    { className, ...restProps },
    ref,
) {
    const theme = useComponentTheme(TAG_CLASS_PREFIX, tagDefaultTheme);

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
        <TagRoot {...rootProps} className={classOverride.Root} theme={theme}>
            <TagText
                {...tagTypographyProps}
                className={classOverride.Label}
                theme={theme}
            >
                {content}
            </TagText>
            {!isStatusTag(type) &&
            (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ENABLED ||
                (deleteOption === TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER &&
                    !disabled)) ? (
                <TagCloseIconContainer
                    {...tagCloseIconContainerProps}
                    className={classOverride.CloseIconContainer}
                    theme={theme}
                >
                    <TagCloseIcon
                        className={classOverride.CloseIcon}
                        theme={theme}
                    />
                </TagCloseIconContainer>
            ) : null}
        </TagRoot>
    );
});

Tag.defaultProps = {
    deleteOption: TAG_DELETE_BEHAVIOUR_OPTIONS.ON_HOVER as TagDeleteIconModeType,
    type: 'default',
};

Tag.propTypes = {
    deleteOption: PropTypes.oneOf(['disabled', 'enabled', 'onHover']),
    label: PropTypes.string,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['default', 'approved', 'denied', 'new']),
    small: PropTypes.bool,
    filled: PropTypes.bool,
};
