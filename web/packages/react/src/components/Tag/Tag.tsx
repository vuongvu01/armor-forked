import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { isStatusTag, getStatusTagLabel, useTagClassName } from './utils';
import { TagPropsType } from './type';
import { tagDefaultTheme } from './theme';
import { TAG_CLASS_PREFIX, TAG_DELETE_BEHAVIOUR_OPTIONS } from './constants';
import { TagCloseIcon, TagCloseIconContainer, TagRoot } from './style';
import { Typography } from '../Typography';

export const Tag: FunctionComponent<TagPropsType> = forwardRef(function Tag(
    {
        className,
        classNames,
        deleteOption,
        label: userLabel,
        onClose,
        type,
        ...restProps
    },
    ref,
) {
    const theme = useTheme();
    let label = userLabel;

    useThemeOverride(TAG_CLASS_PREFIX, theme, tagDefaultTheme);

    const classOverride = useTagClassName(
        TAG_CLASS_PREFIX,
        className,
        classNames,
        deleteOption,
        type,
    );

    if (isStatusTag(type)) {
        label = getStatusTagLabel(type);
    }

    return (
        <TagRoot
            className={classOverride.Root}
            data-testid="TagRoot"
            deleteOption={deleteOption}
            ref={ref}
            theme={theme}
            type={type}
            {...restProps}
        >
            <Typography paragraph small marginTop={1} marginBottom={0}>
                {label}
            </Typography>
            {!isStatusTag(type) &&
            deleteOption !== TAG_DELETE_BEHAVIOUR_OPTIONS.DISABLED ? (
                <TagCloseIconContainer
                    className={classOverride.CloseIconContainer}
                    data-testid="TagCloseIconContainer"
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
    ref: PropTypes.func,
    type: PropTypes.oneOf(['default', 'approved', 'denied', 'new']),
};
