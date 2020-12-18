import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { isStatusTag, useTagClassName } from './utils';
import { TagPropsType } from './type';
import { tagDefaultTheme } from './theme';
import {
    TAG_CLASS_PREFIX,
    TAG_DELETE_BEHAVIOUR_OPTIONS,
    tagCloseIconContainer,
    tagRoot,
} from './constants';
import {
    TagCloseIcon,
    TagCloseIconContainer,
    TagRoot,
    TagTypography,
} from './style';
import { useTag } from './utils/useTag';

export const Tag: FunctionComponent<TagPropsType> = forwardRef(function Tag(
    { className, deleteOption, type, ...restProps },
    ref,
) {
    const theme = useComponentTheme(TAG_CLASS_PREFIX, tagDefaultTheme);

    const classOverride = useTagClassName(
        TAG_CLASS_PREFIX,
        className,
        deleteOption,
        type,
    );

    const { content, restRootProps, onCloseButtonClick } = useTag(restProps);

    return (
        <TagRoot
            data-testid={tagRoot}
            {...restRootProps}
            className={classOverride.Root}
            deleteOption={deleteOption}
            ref={ref}
            theme={theme}
            type={type}
        >
            <TagTypography
                deleteOption={deleteOption}
                className={classOverride.Label}
                paragraph
                small
                theme={theme}
            >
                {content}
            </TagTypography>
            {!isStatusTag(type) &&
            deleteOption !== TAG_DELETE_BEHAVIOUR_OPTIONS.DISABLED ? (
                <TagCloseIconContainer
                    className={classOverride.CloseIconContainer}
                    data-testid={tagCloseIconContainer}
                    deleteOption={deleteOption}
                    onClick={onCloseButtonClick}
                    tabIndex={0}
                    theme={theme}
                    type={type}
                >
                    <TagCloseIcon theme={theme} />
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
    type: PropTypes.oneOf(['default', 'approved', 'denied', 'new']),
};
