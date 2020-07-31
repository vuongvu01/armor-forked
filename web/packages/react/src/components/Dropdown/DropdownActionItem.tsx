import React, { FunctionComponent } from 'react';

import { DropdownActionItemPropsType } from './type';
import {
    DropdownActionContainer,
    DropdownActionContent,
    DropdownAction,
} from './style';

const DropdownActionItem: FunctionComponent<DropdownActionItemPropsType> = ({
    className,
    disabled,
    error,
    isActionSeparatorDisplayed,
    isOptionListShown,
    onClick,
    tabIndex,
    theme,
}) => (
    <DropdownActionContainer
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabIndex}
        theme={theme}
    >
        <DropdownActionContent
            error={error}
            isActionSeparatorDisplayed={isActionSeparatorDisplayed}
            theme={theme}
        >
            <DropdownAction
                className={className}
                disabled={disabled}
                error={error}
                isOptionListShown={isOptionListShown}
                theme={theme}
            />
        </DropdownActionContent>
    </DropdownActionContainer>
);

export default DropdownActionItem;
