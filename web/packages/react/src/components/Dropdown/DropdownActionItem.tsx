import React, { FunctionComponent } from 'react';

import { DropdownActionItemPropsType } from './type';
import {
    DropdownActionContainer,
    DropdownActionContent,
    DropdownAction,
} from './style';

const DropdownActionItem: FunctionComponent<DropdownActionItemPropsType> = ({
    error,
    className,
    isFocused,
    isOptionListShown,
    onClick,
    theme,
}) => (
    <DropdownActionContainer onClick={onClick}>
        <DropdownActionContent error={error} isFocused={isFocused}>
            <DropdownAction
                className={className}
                error={error}
                isOptionListShown={isOptionListShown}
                theme={theme}
            />
        </DropdownActionContent>
    </DropdownActionContainer>
);

export default DropdownActionItem;
