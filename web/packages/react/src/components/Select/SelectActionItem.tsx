import React, { FunctionComponent } from 'react';

import { SelectActionItemPropsType } from './type';
import {
    SelectActionContainer,
    SelectActionContent,
    SelectAction,
} from './style';

const SelectActionItem: FunctionComponent<SelectActionItemPropsType> = ({
    className,
    disabled,
    error,
    isFocused,
    isOptionListShown,
    onClick,
    theme,
}) => (
    <SelectActionContainer disabled={disabled} onClick={onClick} theme={theme}>
        <SelectActionContent error={error} isFocused={isFocused}>
            <SelectAction
                className={className}
                disabled={disabled}
                error={error}
                isOptionListShown={isOptionListShown}
                theme={theme}
            />
        </SelectActionContent>
    </SelectActionContainer>
);

export default SelectActionItem;
