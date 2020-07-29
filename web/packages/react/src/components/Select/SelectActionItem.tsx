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
    isActionSeparatorDisplayed,
    isOptionListShown,
    onClick,
    tabIndex,
    theme,
}) => (
    <SelectActionContainer
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabIndex}
        theme={theme}
    >
        <SelectActionContent
            error={error}
            isActionSeparatorDisplayed={isActionSeparatorDisplayed}
            theme={theme}
        >
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
