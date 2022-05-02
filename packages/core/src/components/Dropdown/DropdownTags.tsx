import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { DropdownTagsPropsType } from './type';
import { OptionObjectType } from '../OptionList/type';
import { DROPDOWN_TAGS_CLASS_PREFIX } from './constants';
import { useDropdownTagsClassName } from './hooks/useDropdownTagsClassName';
import { DropdownTag } from './style';

export const DropdownTags: FC<DropdownTagsPropsType> = memo(
    ({ className, disabled, tagsToDisplay, propsFn }) => {
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
                        key={option.value}
                        deleteOption={option?.disabled ? 'disabled' : 'enabled'}
                        small
                    />
                ))}
            </>
        );
    },
);

DropdownTags.propTypes = {
    tagsToDisplay: PropTypes.array.isRequired,
    propsFn: PropTypes.func.isRequired,
};

DropdownTags.displayName = DROPDOWN_TAGS_CLASS_PREFIX;
