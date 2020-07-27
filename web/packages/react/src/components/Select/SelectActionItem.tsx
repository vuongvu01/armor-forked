import React, { FunctionComponent } from 'react';

import { SelectActionItemPropsType } from './type';
import {
    SelectActionContainer,
    SelectActionContent,
    SelectAction,
} from './style';

const SelectActionItem: FunctionComponent<SelectActionItemPropsType> = ({
    error,
    className,
    isFocused,
    isOptionListShown,
    onClick,
    theme,
}) => (
    <SelectActionContainer onClick={onClick}>
        <SelectActionContent error={error} isFocused={isFocused}>
            <SelectAction
                className={className}
                error={error}
                isOptionListShown={isOptionListShown}
                theme={theme}
            />
        </SelectActionContent>
    </SelectActionContainer>
);

export default SelectActionItem;
