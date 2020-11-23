import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { getStatusTagLabel, isStatusTag, useTagClassName } from './utils';
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

export const Tag: FunctionComponent<TagPropsType> = forwardRef(function Tag(
    { className, deleteOption, label: userLabel, onClose, type, ...restProps },
    ref,
) {
    const theme = useComponentTheme(TAG_CLASS_PREFIX, tagDefaultTheme);
    let label = userLabel;

    const classOverride = useTagClassName(
        TAG_CLASS_PREFIX,
        className,
        deleteOption,
        type,
    );

    if (isStatusTag(type)) {
        label = getStatusTagLabel(type);
    }

    return (
        <TagRoot
            data-testid={tagRoot}
            {...restProps}
            className={classOverride.Root}
            deleteOption={deleteOption}
            ref={ref}
            theme={theme}
            type={type}
        >
            <TagTypography
                deleteOption={deleteOption}
                paragraph
                small
                theme={theme}
            >
                {label}
            </TagTypography>
            {!isStatusTag(type) &&
            deleteOption !== TAG_DELETE_BEHAVIOUR_OPTIONS.DISABLED ? (
                <TagCloseIconContainer
                    className={classOverride.CloseIconContainer}
                    data-testid={tagCloseIconContainer}
                    deleteOption={deleteOption}
                    onClick={onClose}
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
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['default', 'approved', 'denied', 'new']),
};
