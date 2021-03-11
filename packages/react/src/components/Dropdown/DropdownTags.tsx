import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { DropdownTagsPropsType } from './type';
import { OptionObjectType } from '../OptionList/type';
import { useTheme } from '../../styling';
import { DROPDOWN_TAGS_CLASS_PREFIX } from './constants';
import { useDropdownTagsClassName } from './hooks/useDropdownTagsClassName';
import { DropdownTag } from './style';

export const DropdownTags: FunctionComponent<DropdownTagsPropsType> = ({
    className,
    disabled,
    tagsToDisplay,
    propsFn,
}) => {
    const theme = useTheme().armor;

    const classOverride = useDropdownTagsClassName(
        DROPDOWN_TAGS_CLASS_PREFIX,
        className,
        disabled,
    );

    return (
        <>
            {tagsToDisplay.map((option: OptionObjectType) => (
                <DropdownTag
                    {...propsFn(option)}
                    className={classOverride.Root}
                    theme={theme}
                    key={option.value}
                    small
                />
            ))}
        </>
    );
};

DropdownTags.propTypes = {
    tagsToDisplay: PropTypes.array.isRequired,
    propsFn: PropTypes.func.isRequired,
};
